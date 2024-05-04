export const getPrice = (type: string, price: number) => {
  return `$${type === "0" ? `${price}/mo` : `${price * 10}/yr`}`;
};
