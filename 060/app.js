"use strict";
function logMiddleware(data) {
    console.log(data);
    return data;
}
const res60 = logMiddleware(10);
console.log(typeof res60);
const res59 = logMiddleware('sdf');
console.log(typeof res59);
function getSplitedHalf(data) {
    return data.filter((el, index) => index < data.length / 2);
}
console.log(getSplitedHalf([1, 2, 3, 4, 5]));
getSplitedHalf([
    'dd',
    'sd',
    'dscbhsd'
]);
