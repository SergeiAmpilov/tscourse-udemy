"use strict";
function getFullName(firstName, lastName) {
    return `Hello, ${firstName} ${lastName}!`;
}
const getFullNameArrow = (firstName, lastName) => {
    return `Hello, ${firstName} ${lastName}!`;
};
console.log(getFullName('Sergei', 'Ampilov'));
console.log(getFullNameArrow('Artur', 'Pirozkov'));
