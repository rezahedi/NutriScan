import { NutrientProps, MetricProps } from '@/types';

export function limitDecimalPlaces(value: number, decimalLimit: number): number {
  const factorOfTen = Math.pow(10, decimalLimit);
  return Math.round(value * factorOfTen) / factorOfTen;
}

export const calculateSodium = (sodiumInMilligrams: number) => {
  return sodiumInMilligrams * 100 / 100000;
}

/**
 * @param amount is the percentage of the nutrient in the food
 * @param metric is the constant metric object for the nutrient including the benchmark percentages and messages
 * @returns the index of the benchmark and it's 0 - 3
 */
export const getRateIndex = (amount: number, metric: MetricProps) => {

  const { benchmarks_100g } = metric;
  let index = benchmarks_100g.findIndex( (benchmark) => amount <= benchmark );

  return index !== -1
    ? index
    : benchmarks_100g.length - 1;
}

export const getPercentage = (amount: number, max: number) => {
  return Math.round( amount * 100 / max  );
}

// Convert grams to milligrams and vice versa
export const convertMetric = (amount: number, unit: string, toUnit: string) => {
  if(unit === toUnit)
    return amount;

  if(unit === 'g' && toUnit === 'mg')
    return amount * 1000;

  if(unit === 'mg' && toUnit === 'g')
    return amount / 1000;

  return amount;
}

export const getBarParts = (metric: MetricProps) => {
  let { benchmarks_100g } = metric;
  let widthInPercentages: number[] = [];

  let largestBenchmark = benchmarks_100g[ benchmarks_100g.length - 1 ];
  let previousBenchmark = 0;

  benchmarks_100g.map((benchmark) => {
    widthInPercentages.push(
      Math.round( ((benchmark - previousBenchmark) / largestBenchmark) * 100 )
    );
    previousBenchmark = benchmark;
  });

  return widthInPercentages;
};
