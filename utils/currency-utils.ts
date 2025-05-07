export const formatCurrency = (amount: string): string => {
  const num = parseFloat(amount);
  if (isNaN(num)) {
    throw new Error("Invalid number format");
  }
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(num);
};
