export const numberFormat = (number: number) => {
  return new Intl.NumberFormat("en-US").format(number);
};
