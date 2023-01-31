class User43 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}


class Users43 extends Array<User43> {

  searchByName(name: string): Array<User43> {
    return this.filter( u => u.name === name)
  }

  show(): void {
    console.log(this);
  }

  override toString(): string {
    return this
            .map(u => u.name)
            .join(', ');
  }

}


const us43 = new Users43();

us43.push(new User43('Vasia'));
us43.push(new User43('Patia'));
us43.push(new User43('Kolia'));
us43.push(new User43('Sveta'));
us43.push(new User43('Vasia'));
us43.push(new User43('Vasia'));
// us43.show();
// console.log(us43.toString());
// console.log(
//   us43.searchByName('Sveta')
// );
// console.log(
//   us43.searchByName('Vasia')
// );
// console.log(
//   us43.searchByName('Sergei')
// );


///////

class Payment43 {
  sum: number;
  date: Date;
}

class UserWithPayment43 {
  user: User43;
  payment: Payment43;

  constructor(user: User43, payment: Payment43) {
    this.user = user;
    this.payment = payment;
  }
}