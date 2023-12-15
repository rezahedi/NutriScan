import { NutrientProps, MetricProps } from '@/types';

export function limitDecimalPlaces(value: number, decimalLimit: number): number {
  const factorOfTen = Math.pow(10, decimalLimit);
  return Math.round(value * factorOfTen) / factorOfTen;
}

export const calculateSodium = (sodiumInMilligrams: number) => {
  return sodiumInMilligrams * 100 / 100000;
}

/**
 * @param percentage is the percentage of the nutrient in the food
 * @param metric is the constant metric object for the nutrient including the benchmark percentages and messages
 * @returns the index of the benchmark and it's 0 - 3
 */
export const getRateIndex = (percentage: number, metric: MetricProps) => {

  const { benchmarkPercentages } = metric;
  let index = benchmarkPercentages.findIndex( (benchmark) => percentage <= benchmark );

  return index !== -1
    ? index
    : benchmarkPercentages.length - 1;
}

// Convert Grams to Milligrams by 'unitName'
export const getAmountInMilligrams = (nutrient: NutrientProps) => {
  const { amount, unitName } = nutrient;
  return (unitName === "g") ? amount * 1000 : amount;
}

export const getPercentage = (amount: number, max: number) => {
  return Math.round( amount * 100 / max  );
}