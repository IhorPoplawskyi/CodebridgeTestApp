export const truncate = (str: string) => {
  if (str !== null) {
    return str.length > 100 ? str.slice(0, 99) + "..." : str;
  }
};
