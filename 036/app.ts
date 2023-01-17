class User36 {
  name: string;
  age: number;

  constructor();
  constructor(name: string);
  constructor(age: number);
  constructor(name: string, age: number);
  constructor(arg?: string | number, arg2?: number) {

    if (typeof arg2 === 'number') {
      this.age = arg2;
      if (typeof arg === 'string') {
        this.name = arg;        
      }
    } else {
      if (typeof arg === 'number') {
        this.age = arg;      
      }
  
      if (typeof arg === 'string') {
        this.name = arg;      
      }
    }
  }
}       


const us36: User36 = new User36('Svetochka');
const us36_2: User36 = new User36();
const us36_3: User36 = new User36(45);
const us36_4: User36 = new User36('Petr', 41);

console.log(us36, us36_2, us36_3, us36_4);