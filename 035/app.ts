class User35 {
  name: string;
  id: number;

  constructor(name?: string) {
    this.name = name ?? '';
  }
}       


const us35: User35 = new User35('Svetochka');

console.log(us35.name);
console.log(us35);

/*
interface Shop35 {
  adress: string;
  id: number;
}

class MyShop35 implements Shop35 {
  adress: string;
  id: number;

};
*/