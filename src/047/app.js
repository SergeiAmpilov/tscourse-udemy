"use strict";
class Payment47 {
    constructor() {
        this.date = new Date();
        this.getDateArrow = () => {
            return this.date;
        };
    }
    getDate() {
        return this.date;
    }
}
const dd47 = new Payment47();
// console.log(dd47.getDate());
const user47 = {
    id: 1,
    date: '333333-----3',
    payDate: dd47.getDate.bind(dd47),
    // payDate: dd47.getDate,
    payDateArrow: dd47.getDateArrow,
};
console.log(user47.payDate());
console.log(user47.payDateArrow());
/////
class PaymentPersistent47 extends Payment47 {
    save() {
        return super.getDate();
    }
    superSave() {
        return this.getDateArrow();
    }
}
const pp47 = new PaymentPersistent47();
console.log(pp47.save());
console.log(pp47.superSave());
