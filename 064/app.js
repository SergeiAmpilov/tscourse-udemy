"use strict";
function sortById(list, type) {
    return list.sort((a, b) => {
        return type === 'asc' ? a.id - b.id : b.id - a.id;
    });
}
console.log(sortById([
    { id: 3, name: 'Vasia' },
    { id: 90, name: 'Petia' },
    { id: 57, name: 'Kolia' },
], 'desc'));
