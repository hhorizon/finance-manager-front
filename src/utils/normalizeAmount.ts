export const normalizeAmount = (amount: number) => {
  return amount.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ");
};
