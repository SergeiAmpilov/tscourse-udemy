"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Vehicle44_price;
class Vehicle44 {
    constructor() {
        _Vehicle44_price.set(this, void 0); /* private js */
        this.damages = ['--'];
        __classPrivateFieldSet(this, _Vehicle44_price, 110, "f");
    }
    showPrice() {
        return __classPrivateFieldGet(this, _Vehicle44_price, "f");
    }
    isPriceEqual(v) {
        var _a;
        __classPrivateFieldSet(_a = v, _Vehicle44_price, __classPrivateFieldGet(_a, _Vehicle44_price, "f") + 1000, "f");
        return __classPrivateFieldGet(this, _Vehicle44_price, "f") === __classPrivateFieldGet(v, _Vehicle44_price, "f");
    }
    addDamage(d) {
        this.damages.push(d);
    }
    set model(s) {
        this._model = `mod - ${s}`;
    }
    get model() {
        return this._model;
    }
}
_Vehicle44_price = new WeakMap();
class EuroTruck44 extends Vehicle44 {
    constructor() {
        super();
        this.run = 10000;
    }
}
const v44_1 = new Vehicle44();
const v44_2 = new Vehicle44();
console.log(v44_1.showPrice(), v44_2.showPrice());
console.log(v44_1.isPriceEqual(v44_2));
console.log(v44_1.showPrice(), v44_2.showPrice());
/*
const vh44 = new Vehicle44();
vh44.make = ' vw';
vh44.addDamage('corrupt');
vh44.model = '69';
console.log(vh44.model);
console.log(vh44);


const tr44 = new EuroTruck44();
// tr44.
console.log(tr44);
*/ 
