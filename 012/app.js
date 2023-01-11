"use strict";
function getFullNameObj(userEnt) {
    return `Hello, ${userEnt.firstName} ${userEnt.lastName}!`;
}
const user = {
    // firstName: 'Sergei',
    Name: 'Sergei',
    lastName: 'Ampilov',
    city: 'Samarqand',
    age: 37,
};
console.log(getFullNameObj(user));
