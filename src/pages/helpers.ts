export const findLastDay = (y: number, m: number) => {
  return new Date(y, m + 1, 0).toISOString().split('T')[0];
};
