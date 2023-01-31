"use strict";
class User43 {
    constructor(name) {
        this.name = name;
    }
}
class Users43 extends Array {
    searchByName(name) {
        return this.filter(u => u.name === name);
    }
    show() {
        console.log(this);
    }
    toString() {
        return this
            .map(u => u.name)
            .join(', ');
    }
}
const us43 = new Users43();
us43.push(new User43('Vasia'));
us43.push(new User43('Patia'));
us43.push(new User43('Kolia'));
us43.push(new User43('Sveta'));
us43.push(new User43('Vasia'));
us43.push(new User43('Vasia'));
// us43.show();
// console.log(us43.toString());
// console.log(
//   us43.searchByName('Sveta')
// );
// console.log(
//   us43.searchByName('Vasia')
// );
// console.log(
//   us43.searchByName('Sergei')
// );
///////
class Payment43 {
}
class UserWithPayment43 {
    constructor(user, payment) {
        this.user = user;
        this.payment = payment;
    }
}
