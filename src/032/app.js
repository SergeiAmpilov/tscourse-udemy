"use strict";
/* type guard */
const uSerg32 = {
    name: 'Sergei',
    email: 's@s.ru',
    login: 'sa'
};
function isString32(x) {
    return typeof x === 'string';
}
function logId(id) {
    if (isString32(id)) {
    }
}
function isAdmin32(user) {
    return 'roleId' in user;
}
function isAdminAlter32(user) {
    return user.roleId !== undefined;
}
function setRole32(user) {
    if (isAdmin32(user)) {
        user.roleId = 0;
    }
    else {
        // user.
        throw new Error('user is not admin');
    }
}
