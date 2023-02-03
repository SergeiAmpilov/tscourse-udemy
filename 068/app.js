"use strict";
function getValue(obj, key) {
    return obj[key];
}
const user68 = {
    name: 'Vasia',
    age: 30
};
const userName68 = getValue(user68, 'name');
console.log(userName68);
