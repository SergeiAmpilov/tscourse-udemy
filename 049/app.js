"use strict";
/* абстрактные классы */
class Controller49 {
    handleWithLogs(req) {
        console.log('start');
        this.handle(req);
        console.log('finish');
    }
}
class UserController49 extends Controller49 {
    handle(req) {
        // throw new Error("Method not implemented.");
        console.log(req);
    }
}
// new Controller(); - error
new UserController49().handle('Request');
new UserController49().handleWithLogs('Request');
