/* абстрактные классы */

abstract class Controller49 {
  abstract handle(req: any): void;

  handleWithLogs(req: any): void {
    console.log('start');
    this.handle(req);
    console.log('finish');

  }
}

class UserController49 extends Controller49 {

  handle(req: any): void {
    // throw new Error("Method not implemented.");
    console.log(req);
  }


  
}

// new Controller(); - error
new UserController49().handle('Request');
new UserController49().handleWithLogs('Request');