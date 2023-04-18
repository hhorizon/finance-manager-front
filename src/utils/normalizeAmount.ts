export const normalizeAmount = (amount: number) => {
  return amount.toFixed(2).replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ");
};
