import { MetricProps, NutrientProps } from '@/types';
import { nutrientMetrics, rateIndexColors } from '@/constants';


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
  const metric = nutrientMetrics[ nutrient.name as keyof typeof nutrientMetrics ] || null;
  if ( metric === null )
    return null;

  return metric;
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