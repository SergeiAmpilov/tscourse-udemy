"use strict";
const ar20 = [1, 'valorant', 3455, 3, 'mqb'];
const t_ar20 = ['valorant', -5];
function logId20(id) {
    if (typeof id === 'string') {
        console.log(id, id.toUpperCase());
    }
    else {
        console.log(id);
    }
    return typeof id;
}
console.log(logId20(1));
console.log(logId20('vdfv'));
console.log(logId20(true));
// console.log(logId20([2, 'd']));
function logError20(err) {
    if (Array.isArray(err)) {
        return err.reduce((a, b) => a + b);
    }
    return err.toUpperCase();
}
console.log(logError20('errrrr'));
console.log(logError20(['h', 'e', 'l', 'l', 'oe']));
function logObj20(obj) {
    if ('a' in obj) {
        return obj.a;
    }
    return obj.b;
}
const e20 = 1;
console.log(typeof e20);
let b20 = 1;
