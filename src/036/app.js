"use strict";
class User36 {
    constructor(arg, arg2) {
        if (typeof arg2 === 'number') {
            this.age = arg2;
            if (typeof arg === 'string') {
                this.name = arg;
            }
        }
        else {
            if (typeof arg === 'number') {
                this.age = arg;
            }
            if (typeof arg === 'string') {
                this.name = arg;
            }
        }
    }
}
const us36 = new User36('Svetochka');
const us36_2 = new User36();
const us36_3 = new User36(45);
const us36_4 = new User36('Petr', 41);
console.log(us36, us36_2, us36_3, us36_4);
