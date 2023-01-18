"use strict";
var PaymentStatus37;
(function (PaymentStatus37) {
    PaymentStatus37["Hold"] = "hold";
    PaymentStatus37["Process"] = "process";
    PaymentStatus37["Reverse"] = "reverse";
})(PaymentStatus37 || (PaymentStatus37 = {}));
class Payment37 {
    constructor(id) {
        this.id = id;
        this.createdAt = new Date();
        this.status = PaymentStatus37.Hold;
    }
    getPaymentLifeTime() {
        return new Date().getTime() - this.createdAt.getTime();
    }
    unholdPayment() {
        if (this.status === PaymentStatus37.Process) {
            throw new Error('payment allready processed');
        }
        this.status = PaymentStatus37.Reverse;
        this.UpdatedAt = new Date();
    }
}
const p37 = new Payment37(1);
console.log(p37);
console.log(p37.getPaymentLifeTime());
p37.unholdPayment();
console.log(p37);
