import { MetricProps, NutrientProps, AdditiveProps } from '@/types';
import { nutrientMetrics, rateIndexColors } from '@/constants';
import { additivesList, riskTitles } from '@/constants/additives';


export const limitDecimalPlaces = (value: number, decimalLimit: number) : number => {
  const factorOfTen = Math.pow(10, decimalLimit);
  return Math.round(value * factorOfTen) / factorOfTen;
}

export const getPercentage = (amount: number, max: number) => {
  return Math.round( amount * 100 / max  );
}

// Convert grams to milligrams and vice versa
export const convertMetric = (amount: number, fromUnit: string, toUnit: string) => {
  if(fromUnit === toUnit)
    return amount;

  if(fromUnit === 'g' && toUnit === 'mg')
    return amount * 1000;

  if(fromUnit === 'mg' && toUnit === 'g')
    return amount / 1000;

  return amount;
}

/**
 * 1: Verify raw data from API
**/
export const verifyNutrient = (nutrient: NutrientProps) : MetricProps | null => {

  // Check values
  if ( nutrient.unitName === '' && nutrient.name === '' )
    return null;

  // Verify if nutrient is available in nutrientMetrics constant
  const metric = getMetric( nutrient.name );
  if ( metric === null )
    return null;

  return metric;
}

export const getMetric = (name: string) : MetricProps | null => {
  return nutrientMetrics[ name as keyof typeof nutrientMetrics ] || null;
}

/**
 * 2: Rate the nutrient
 * @param amount is the percentage of the nutrient in the food
 * @param metric is the constant metric object for the nutrient including the benchmark percentages and messages
 * @returns the index of the benchmark and it's 0 - 3
 */
export const getRateIndex = (amount: number, metric: MetricProps) : number => {

  const { benchmarks_100g } = metric;
  let index = benchmarks_100g.findIndex( (benchmark) => amount <= benchmark );

  return index !== -1
    ? index
    : benchmarks_100g.length - 1;
}

export const getRateByIndex = (index: number, { rates }: MetricProps) : number => {
  return rates[ index ];
}

export const getIndexOfRate = (rate: number, { rates }: MetricProps) : number => {
  return rates.indexOf( rate );
}

/**
 * 3: Get nutrient Bar UI values
 */
export const getBarUIDetails = (
  amount: number, ratedIndex: number, metric: MetricProps
) : {
  message: string,
  color: string,
  arrowLeft: string,
  barPartsWidth: string[],
  moreThanLargestBenchmark: boolean
} => {

  // Get message
  let message = metric.messages[ ratedIndex ];
  // Set color of the rate
  let color = rateIndexColors[ metric.rates[ ratedIndex ] ];

  // Calculate benchmark's bars width in percentage
  let barPartsWidth = getBarPartsWidth(metric);

  // Get the left position of the arrow
  let arrowLeft = Math.round( (amount / metric.benchmarks_100g[ metric.benchmarks_100g.length - 1 ]) * 100 );
  let moreThanLargestBenchmark = false;
  if ( arrowLeft > 100 ) {
    arrowLeft = 100;
    moreThanLargestBenchmark = true;
  }

  return { message, color, arrowLeft: `${arrowLeft}%`, barPartsWidth, moreThanLargestBenchmark }
}

export const getBarPartsWidth = (metric: MetricProps) : string[] => {
  let { benchmarks_100g } = metric;
  let widthInPercentages: string[] = [];

  let largestBenchmark = benchmarks_100g[ benchmarks_100g.length - 1 ];
  let previousBenchmark = 0;

  benchmarks_100g.map((benchmark) => {
    let width = Math.round( ((benchmark - previousBenchmark) / largestBenchmark) * 100 );
    widthInPercentages.push( `${width}%` );
    previousBenchmark = benchmark;
  });

  return widthInPercentages;
};

export const checkBarcodeFormat = (barcode: string) : boolean => {
  return /^\d{8,13}$/.test(barcode);
}

export const getAdditivesDetails = (additives: string[]) : AdditiveProps[] => {
  const additivesWithInfo: AdditiveProps[] = [];
  additives.forEach((eNumber) => {
    let additiveInfo = additivesList.find((additiveObj) => additiveObj.number === eNumber );

    if ( additiveInfo === undefined ) {
      additivesWithInfo.push( {
        number: eNumber,
        name: 'Unknown',
        risk: -1,
        description: '',
        use: '',
        riskTitle: 'Unknown',
        color: 'gray'
      } );

    } else {
      additivesWithInfo.push( {
        ...additiveInfo,
        riskTitle: riskTitles[ additiveInfo.risk ],
        color: rateIndexColors[ additiveInfo.risk ]
      } );
    }
  });

  additivesWithInfo.sort((a, b) => b.risk - a.risk);

  return additivesWithInfo;
}

export const getAdditivesAmount = (additives: string[], metric: MetricProps) : number =>
{
  // Get additives info of each E number
  const additivesWithInfo: AdditiveProps[] = getAdditivesDetails( additives );


  // Multiply the risk to find the amount so that we can rate it by comparing it to the benchmarks
  let points = 0;
  points += additivesWithInfo.filter(a => a.risk === 3).length * 100; // 3 = Hazardous
  points += additivesWithInfo.filter(a => a.risk === 2).length * 10;  // 2 = Moderate Risk
  points += additivesWithInfo.filter(a => a.risk === 1).length;       // 1 = Limited Risk

  return points;
}

export const rateProduct = (nutrients: NutrientProps[]) : number => {
  // 60 points for nutrients, 60 / nutrients.length and each nutrient rated based on benchmarks percentage not just the rate 0-3
  // 30 points for additives
  // 10 points for organic
  // sum up all rate of nutrients
  let sum = 0;
  let count = 0;
  nutrients.forEach((nutrient) => {
    if( nutrient.name!=='additives' && nutrient.rate !== undefined ) {
      sum += 3 - nutrient.rate;
      count++;
    }
  });
  sum = sum / count;
  let nutrientPoints = sum * 70 / 3;
  
  sum = 3;
  nutrients.find((nutrient) => {
    if( nutrient.name==='additives' )
      sum = 3 - nutrient.rate!;
  });
  let additivesPoints = sum * 30 / 3;
  return Math.round( nutrientPoints + additivesPoints );
}