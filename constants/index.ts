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
  },
  'additives':
  {
    name: "Additives",
    img: '/additives.png',
    messages: [
      "No hazardous substances",     // without any additives
      "No risky additives",          // with additives
      "An additive to avoid",        // with one moderate additive
      "Contains additives to avoid", // with multiple moderate additives
      "A risky additive",            // with one hazardous additive
      "Contains risky additives",    // with multiple hazardous additives
    ],
    benchmarks_100g: [1, 9, 19, 99, 199, 999],
    benchmarks_unit: '',
    rates: [0, 0, 2, 2, 3, 3],
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
  //   img: '',
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
  //   img: '',
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
  //   img: '',
  // },
};

//! Whenever these colors are changed, also change them in tailwind config safelist!
export const rateIndexColors = [
  "#49a160",    // Very low:  Dark Green
  "#30cc70",    // Low:       Light Green
  "#e57e24",    // High:      Orange
  "#ec4a3c"     // Very High: Red
];

export const productRateTags: string[] = [
  "Excellent",
  "Good",
  "Bad",
  "Poor"
]

export const productRateBenchmarks: number[] = [
  85, // Excellent
  70, // Good
  60, // Bad
  0   // Poor
]