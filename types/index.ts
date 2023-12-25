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

export type ProductWithNutrients = Products & {
  nutrients: ProductNutrients[];
};
