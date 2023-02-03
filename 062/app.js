"use strict";
function getSplitedHalf62(data) {
    return data.filter((el, index) => index < data.length / 2);
}
const gspF = getSplitedHalf62;
console.log(getSplitedHalf([1, 2, 3, 4, 5]));
const logLine = {
    timeStamp: new Date(),
    data: {
        a: 1,
    }
};
