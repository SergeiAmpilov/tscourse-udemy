class User57 {
  role?: 'admin' | 'user';
  constructor (public name: string, public age: number) {
  }
}


console.log('hw 57');


const u_57 = new User57('Ivan Fedorovich', 67);
u_57.role = undefined;
console.log(u_57);