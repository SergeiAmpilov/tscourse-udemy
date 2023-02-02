function logMiddleware<T>(data: T): T {
  console.log(data);
  return data;
}


const res60 = logMiddleware(10);
console.log(typeof res60);
const res59 = logMiddleware<string>('sdf');
console.log(typeof res59);


function getSplitedHalf<T>(data: Array<T>): Array<T> {
  return data.filter( (el, index) => index < data.length / 2);
}

console.log(getSplitedHalf(
  [1,2,3,4, 5]
));


getSplitedHalf<string>([
  'dd',
  'sd',
  'dscbhsd'
]);