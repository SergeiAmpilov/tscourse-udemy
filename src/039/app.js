"use strict";
class User39 {
    set login(val) {
        this._login = `user-${val}`;
    }
    get login() {
        return 'hidden-login';
    }
}
const u39 = new User39();
u39.login = 'ampse';
console.log(u39);
console.log(u39.login);
