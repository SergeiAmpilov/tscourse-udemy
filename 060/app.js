"use strict";
function logMiddleware(data) {
    console.log(data);
    return data;
}
const res60 = logMiddleware(10);
console.log(typeof res60);
const res59 = logMiddleware('sdf');
console.log(typeof res59);
