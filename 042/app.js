"use strict";
class User42 {
    constructor() {
        this.name = 'default user';
        // this.name = 'real user';
        console.log(this.name);
    }
}
class Admin42 extends User42 {
    constructor() {
        super();
        this.name = 'admin';
        console.log(this.name);
    }
}
const r42 = new Admin42();
class HttpError42 extends Error {
    constructor(message) {
        super(message);
    }
}
