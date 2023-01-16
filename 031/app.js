"use strict";
let a31 = 5;
let b31 = a31.toString();
let c31 = '8g9';
let d31 = +c31;
let e31 = parseInt(c31);
const f31 = 'true';
const j31 = new Boolean(f31).valueOf();
console.log(d31);
console.log(e31);
console.log(j31);
const uSerg31 = {
    name: 'Sergei',
    email: 's@s.ru',
    login: 'sa'
};
const sAdm31 = Object.assign(Object.assign({}, uSerg31), { rootId: 1 });
console.log(sAdm31);
function userToAdmin31(u) {
    return {
        name: u.name,
        rootId: 1,
    };
}
