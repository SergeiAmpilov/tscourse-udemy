function getSplitedHalf62<T>(data: Array<T>): Array<T> {
  return data.filter( (el, index) => index < data.length / 2);
}

const gspF: <T>(data: T[]) => T[] = getSplitedHalf62;

console.log(getSplitedHalf(
  [1,2,3,4, 5]
));

interface ILogDate<T> {
  timeStamp: Date,
  data: T
}

const logLine: ILogDate<{ a: number }> = {
  timeStamp: new Date(),
  data: {
    a: 1,
  }
};