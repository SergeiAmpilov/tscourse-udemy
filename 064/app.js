"use strict";
function sortById(list) {
    return list.sort((a, b) => {
        return a.id - b.id;
    });
}
console.log(sortById([
    { id: 3, name: 'Vasia' },
    { id: 90, name: 'Petia' },
    { id: 57, name: 'Kolia' },
]));
