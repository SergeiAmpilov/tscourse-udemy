"use strict";
/* Задача - реализовать функцию, которая принимает два параметра -
  объект и строку название ключа.
  возвращает новую структуру с группировкой по ключу данных из первого аргумента */
const data = [
    { group: 1, name: 'Vasia' },
    { group: 2, name: 'Petia' },
    { group: 1, name: 'Sveta' },
];
function groupByKey(arObj, key) {
    let res = {};
    arObj.map((el) => {
        const locKey = el[key];
        if (!res[locKey]) {
            res[locKey] = [];
        }
        res[locKey].push(el);
        return el;
    });
    return res;
}
console.log(groupByKey(data, 'group'));
