"use strict";
class Payment41 {
    constructor(id) {
        this.status = 'new';
        this.id = id;
    }
    pay() {
        this.status = 'paid';
    }
}
class PersistedPayment extends Payment41 {
    constructor() {
        const id = Math.random();
        super(id);
        this.paidAt = new Date();
    }
    save() {
    }
    pay(date) {
        super.pay();
        this.paidAt = date !== null && date !== void 0 ? date : new Date();
    }
}
// new PersistedPayment(23).
