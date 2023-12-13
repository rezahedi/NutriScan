export function limitDecimalPlaces(value: number, decimalLimit: number): number {
  const factorOfTen = Math.pow(10, decimalLimit);
  return Math.round(value * factorOfTen) / factorOfTen;
}
