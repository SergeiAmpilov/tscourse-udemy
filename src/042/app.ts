class User42 {
  name: string = 'default user';

  constructor() {
    // this.name = 'real user';
    console.log(this.name);
  }
}

class Admin42 extends User42 {
  name: string = 'admin'

  constructor() {
    super();
    console.log(this.name);
  }
}

const r42 = new Admin42();

class HttpError42 extends Error {

  constructor(message: string) {
    super(message);
  }
}