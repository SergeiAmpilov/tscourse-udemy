interface IUser {
  name: string;
  age: number;
}

type KeysOfUser = keyof IUser;

function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}


const user68: IUser = {
  name: 'Vasia',
  age: 30
}

const userName68 = getValue(user68, 'name');
console.log(userName68);
