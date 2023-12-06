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
  nutrients: Nutrient[];
}

export interface Nutrient {
  id: number;
  name: string;
  code: string;
  amount: number;
  unitName: string;
}