import { ProductNutrients, Products } from "@prisma/client";

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
  additives: string[];
  nutrients: NutrientProps[];
}

export interface NutrientProps {
  id: number;
  name: string;
  code: string;
  amount: number;
  unitName: string;
  rate?: number;
  ratedIndex?: number;
  metric?: MetricProps;
}

export interface MetricProps {
  name: string;
  img: string;
  messages: string[];
  benchmarks_100g: number[];
  benchmarks_unit: string;
  benchmarks_ratio?: number[];
  rates: number[],
}

export interface AdditiveProps {
  number: string;
  name: string;
  // Risk Levels
  // 0 = No Risk
  // 1 = Limited Risk
  // 2 = Moderate Risk
  // 3 = Hazardous
  risk: number;
  description: string;
  use: string;
  riskTitle?: string;
  color?: string;
}
