let a31: number = 5;
let b31: string = a31.toString();

let c31: string = '8g9';
let d31: number = +c31;
let e31: number = parseInt(c31);

const f31: string = 'true';
const j31: boolean = new Boolean(f31).valueOf();



console.log(d31);
console.log(e31);
console.log(j31);


interface User31 {
  name: string;
  email: string;
  login: string;
}

interface Admin31 {
  name: string;
  rootId: number;
}

const uSerg31: User31 = {
  name: 'Sergei',
  email: 's@s.ru',
  login: 'sa'
};

const sAdm31: Admin31 = {
  ...uSerg31,
  rootId: 1,
}

console.log(sAdm31);



function userToAdmin31(u: User31): Admin31 {
  return {
    name: u.name,
    rootId: 1,
  };
}