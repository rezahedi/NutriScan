import { calculateSodium } from "@/utils";
import { MetricProps } from "@/types";

// ChatGPT: Reference Daily Intake (RDI): The Reference Daily Intake for sodium is often around 2,300 milligrams per day for adults.
export const referenceDailyIntake = 1900; // mg

// Nutrient rate levels in milligrams: (Very low, low, moderate, high, very high)
// CAUTION: These numbers are not accurate, I got them from ChatGPT!
// RDI is Reference Daily Intake
export const nutrientMetrics = {
  getNutrientMetric: (nutrientName: string): MetricProps | null => {
    if( nutrientName.includes("sodium") )
      return nutrientMetrics.sodium;
    if( nutrientName.includes("sugar") )
      return nutrientMetrics.sugar;
    if( nutrientName.includes("fat") )
      return nutrientMetrics.fat;
    if( nutrientName.includes("saturated") )
      return nutrientMetrics.saturatedFat;
    if( nutrientName.includes("cholesterol") )
      return nutrientMetrics.cholesterol;
    if( nutrientName.includes("protein") )
      return nutrientMetrics.protein;
    if( nutrientName.includes("fiber") )
      return nutrientMetrics.fiber;
    if( nutrientName.includes("carbohydrates") )
      return nutrientMetrics.carbohydrates;
    if( nutrientName.includes("calories") )
      return nutrientMetrics.calories;

    return null;
  },
  sodium: {
    messages: [
      "Heart-healthy, low salt.",
      "Balanced sodium choice.",
      "Approach with care.",
      "Caution: salty dance party!"
    ],
    benchmarks: [100, 300, 500, 800],
    benchmarkPercentages: [0.5, 1.5, 3.5, 5.5],
    RDI: 1900, // 2300 milligrams per day for adults. For a more conservative target, you can use 1500 milligrams per day
    calc: calculateSodium
  },
  sugar: {
    messages: [
      "Sweet, not sugary.",
      "Moderate sweetness.",
      "Watch the sweet intake!",
      "Sugar overload, use caution!"
    ],
    benchmarks: [2, 6, 12, 18],
    benchmarkPercentages: [2.5, 5.5, 12.5, 20.5],
    RDI: 31, // 25 grams per day for women and 38 grams per day for men
    calc: calculateSodium
  },
  fat: {
    messages: [
      "Lean and mean, fat-free.",
      "Balanced fat for joy.",
      "Fat alert, consume wisely!",
      "Fat fiesta, moderate fun!"
    ],
    benchmarks: [2, 5, 10, 15],
    benchmarkPercentages: [2.5, 5.5, 12.5, 20.5],
    RDI: 70, // 20% to 35% of total daily calories
    calc: calculateSodium
  },
  saturatedFat: {
    messages: [
      "Saturated fat superstar!",
      "Balanced saturated fat choice.",
      "Saturated fat alert, check intake!",
      "Overload, use with caution!"
    ],
    benchmarks: [2, 5, 10, 15],
    benchmarkPercentages: [0.5, 1.5, 3.5, 5.5],
    RDI: 24, // 10% of total daily calories
    calc: calculateSodium
  },
  cholesterol: {
    messages: [
      "Heart-smart, low cholesterol.",
      "Balanced, heart-friendly.",
      "Cholesterol alert, be mindful!",
      "Overloaded, handle with care!"
    ],
    benchmarks: [10, 30, 60, 100],
    benchmarkPercentages: [0.5, 1.5, 3.5, 5.5],
    RDI: 300, // Less than 300 milligrams per day for most adults
    calc: calculateSodium
  },
  protein: {
    messages: [
      "Protein powerhouse!",
      "Balanced protein source.",
      "Protein alert, check intake!",
      "Excessive protein, use caution!"
    ],
    benchmarks: [5, 10, 20, 30],
    benchmarkPercentages: [0.5, 1.5, 3.5, 5.5],
    RDI: 50, // 50 grams per day for most adults
    calc: calculateSodium
  },
  fiber: {
    messages: [
      "Fiber champion!",
      "Balanced fiber choice.",
      "Fiber alert, check intake!",
      "Low fiber, consider alternatives!"
    ],
    benchmarks: [2, 5, 10, 15],
    benchmarkPercentages: [0.5, 1.5, 3.5, 5.5],
    RDI: 31, // 25 grams per day for women and 38 grams per day for men
    calc: calculateSodium
  },
  carbohydrates: {
    messages: [
      "Carb-conscious choice!",
      "Moderate carb level.",
      "Carb alert, be mindful!",
      "Carb overload, use caution!"
    ],
    benchmarks: [10, 30, 60, 100],
    benchmarkPercentages: [0.5, 1.5, 3.5, 5.5],
    RDI: 130, // 130 grams per day
    calc: calculateSodium
  },
  calories: {
    messages: [
      "Low-calorie delight!",
      "Moderate calorie content.",
      "Calorie alert, check intake!",
      "Calorie overload, use caution!"
    ],
    benchmarks: [50, 100, 200, 300],
    benchmarkPercentages: [2.5, 5.5, 12.5, 20.5],
    RDI: 2000, // 2000 calories per day for adult women and 2500 calories per day for adult men
    calc: calculateSodium
  },
};

//! Whenever these colors are changed, also change them in tailwind config safelist!
export const rateIndexColors = [
  "lime-800",    // Very low:  Dark Green
  "lime-500",    // Low:       Light Green
  "orange-500",  // High:      Orange
  "red-700"      // Very High: Red
];