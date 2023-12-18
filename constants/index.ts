import { calculateSodium } from "@/utils";

// ChatGPT: Reference Daily Intake (RDI): The Reference Daily Intake for sodium is often around 2,300 milligrams per day for adults.
export const referenceDailyIntake = 1900; // mg

// Nutrient rate levels in milligrams: (Very low, low, moderate, high, very high)
// CAUTION: These numbers are not accurate, I got them from ChatGPT!
// RDI is Reference Daily Intake
export const nutrientMetrics = {
  'sodium':
  {
    name: "Sodium",
    img: '/sodium.png',
    messages: [
      "Heart-healthy, low sodium",
      "Balanced sodium choice",
      "Approach with care",
      "Caution: salty dance party!"
    ],
    benchmarks_100g: [180, 360, 630, 900],
    benchmarks_unit: 'mg',
    rates: [0, 1, 2, 3],
    RDI: 1900, // 2300 milligrams per day for adults. For a more conservative target, you can use 1500 milligrams per day
    calc: calculateSodium
  },
  'salt':
  {
    name: "Salt",
    img: '/sodium.png',
    messages: [
      "Low salt",
      "Balanced salt choice",
      "Approach with care",
      "Caution: salty dance party!"
    ],
    benchmarks_100g: [0.46, 0.92, 1.62, 2.3],
    benchmarks_unit: 'g',
    rates: [0, 1, 2, 3],
    RDI: 1900,
    calc: calculateSodium
  },
  'sugars':
  {
    name: "Sugar",
    img: '/sugar.png',
    messages: [
      "Sweet, not sugary.",
      "Moderate sweetness.",
      "Watch the sweet intake!",
      "Sugar overload, use caution!"
    ],
    benchmarks_100g: [9, 18, 31, 45],
    benchmarks_unit: 'g',
    rates: [0, 1, 2, 3],
    RDI: 31, // 25 grams per day for women and 38 grams per day for men
    calc: calculateSodium
  },
  'saturated-fat':
  {
    name: "Saturated fat",
    img: '/fat.png',
    messages: [
      "Saturated fat superstar",
      "Balanced saturated fat choice.",
      "Saturated fat alert, check intake!",
      "Fatty Overload, use with caution!"
    ],
    benchmarks_100g: [2, 4, 7, 10],
    benchmarks_unit: 'g',
    benchmarks_ratio: [20, 35, 50, 70],
    rates: [0, 1, 2, 3],
    RDI: 24, // 10% of total daily calories
    calc: calculateSodium
  },
  'proteins':
  {
    name: "Protein",
    img: '/protein.png',
    messages: [
      "Some protein",
      "Protein powerhouse!",
    ],
     // good, very good
    benchmarks_100g: [6.8, 14],
    benchmarks_unit: 'g',
    rates: [1, 0],
    RDI: 50, // 50 grams per day for most adults
    calc: calculateSodium
  },
  'fiber':
  {
    name: "Fiber",
    img: '/fiber.png',
    messages: [
      "Some fiber",
      "Fiber champion!",
    ],
    benchmarks_100g: [3.5, 7],
    benchmarks_unit: 'g',
    rates: [1, 0],
    RDI: 31, // 25 grams per day for women and 38 grams per day for men
    calc: calculateSodium
  },
  'energy-kcal': {
    name: "Calories",
    img: '/calories.png',
    messages: [
      "Low-calorie delight!",
      "Moderate calorie content.",
      "Calorie alert, check intake!",
      "Calorie overload, use caution!"
    ],
    benchmarks_100g: [160, 360, 560, 800], //Kcal but we show it as Cal
    benchmarks_unit: 'Cal',
    rates: [0, 1, 2, 3],
    RDI: 2000, // 2000 calories per day for adult women and 2500 calories per day for adult men
    calc: calculateSodium
  },
  // vegetables: {
  //   messages: [
  //     "Good source of vegetables.",
  //     "Excellent source of vegetables!",
  //   ],
  //   benchmarks_100g: [],
  //   benchmarks_unit: '',
  //   benchmarks_ratio: [80, 100],
  //   rates: [1, 0],
  //   RDI: 100, // 2.5 cups of vegetables per day for a 2,000-calorie diet
  //   img: '',
  //   calc: calculateSodium
  // },
  // fruits: {
  //   messages: [
  //     "Good source of fruits.",
  //     "Excellent source of fruits!",
  //   ],
  //   benchmarks_100g: [],
  //   benchmarks_unit: '',
  //   benchmarks_ratio: [80, 100],
  //   rates: [1, 0],
  //   RDI: 100, // 2 cups of fruit per day for a 2,000-calorie diet
  //   img: '',
  //   calc: calculateSodium
  // },
  // nuts: {
  //   messages: [
  //     "Good source of nuts.",
  //     "Excellent quantity!",
  //   ],
  //   benchmarks_100g: [],
  //   benchmarks_unit: '',
  //   benchmarks_ratio: [80, 100],
  //   rates: [1, 0],
  //   RDI: 100, // 2.5 cups of nuts per week for a 2,000-calorie diet
  //   img: '',
  //   calc: calculateSodium
  // },
};

//! Whenever these colors are changed, also change them in tailwind config safelist!
export const rateIndexColors = [
  "#3F620D",    // Very low:  Dark Green
  "#84CC16",    // Low:       Light Green
  "#F97316",    // High:      Orange
  "#B91C1C"     // Very High: Red
];

export const USDAGovCodeToOFFOrgKeyword = {
  "307": "sodium",
  "539": "sugars",
  "606": "saturated-fat",
  "203": "proteins",
  "291": "fiber",
  "208": "energy-kcal",
}