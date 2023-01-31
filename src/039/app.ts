class User39 {
  _login: string;
  password: string;

  set login(val: string) {
    this._login = `user-${val}`;
  }

  get login() {
    return 'hidden-login';
  }



}


const u39 = new User39();
u39.login = 'ampse';
console.log(u39);
console.log(u39.login);