export interface NutritionProps {
  id: string;
  name: string;
  image: string;
  brandOwner: string;
  brandName: string;
  ingredients: string;
  servingSize: number;
  servingSizeUnit: string;
  packageWeight: string;
  nutrients: NutrientProps[];
}

export interface NutrientProps {
  id: number;
  name: string;
  code: string;
  amount: number;
  unitName: string;
}

export interface MetricProps {
  messages: string[];
  benchmarks: number[];
  benchmarkPercentages: number[];
  RDI: number;
  calc: (value: number) => number;
}