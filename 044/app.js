"use strict";
class Vehicle44 {
    constructor() {
        this.damages = ['--'];
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
class EuroTruck44 extends Vehicle44 {
    constructor() {
        super();
        this.run = 10000;
    }
}
const vh44 = new Vehicle44();
vh44.make = ' vw';
vh44.addDamage('corrupt');
vh44.model = '69';
console.log(vh44.model);
console.log(vh44);
const tr44 = new EuroTruck44();
// tr44.
console.log(tr44);
