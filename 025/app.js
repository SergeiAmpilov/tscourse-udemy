"use strict";
function multiply(a, b) {
    if (typeof b === 'undefined') {
        return a * a;
    }
    else {
        return a * b;
    }
}
function testPass25(user) {
    var _a;
    const t = (_a = user.password) === null || _a === void 0 ? void 0 : _a.type;
    // const t = user.password ? user.password.type : undefined;
    const tt = user.password.type;
    return true;
}
function test25(param) {
    const t = param !== null && param !== void 0 ? param : 25;
}
