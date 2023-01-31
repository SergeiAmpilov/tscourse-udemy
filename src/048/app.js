"use strict";
class UserBuilder47 {
    setName(name) {
        this.name = name;
        return this;
    }
    isAdmin() {
        return this instanceof AdminBuilder47;
    }
}
class AdminBuilder47 extends UserBuilder47 {
}
const u47 = new UserBuilder47().setName('Sergei');
const adm47 = new AdminBuilder47().setName('Viktor');
console.log(u47);
const user477 = new UserBuilder47();
if (user477.isAdmin()) {
    user477.roles;
}
else {
    user477.isAdmin();
}
