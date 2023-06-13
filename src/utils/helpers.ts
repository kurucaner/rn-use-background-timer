export const differenceInSeconds = (date1: Date, date2: Date): number => {
  const diffInMs = Math.abs(date1.getTime() - date2.getTime());
  return diffInMs / 1000;
};
