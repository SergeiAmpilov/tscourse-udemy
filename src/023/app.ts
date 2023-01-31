interface User22 {
  name: string,
  age: number,
  skills: string[],
  log: (id: number) => string,
};

interface Role22 {
  id: number,
}


interface UserWithRole22 extends User22, Role22 {
  createdAt: Date,
}

const U22: UserWithRole22 = {
  name: 'Sergei',
  age: 37,
  skills: [
    'kata', 'typescript'
  ],
  id: 123,
  createdAt: new Date(),
  log: id => "",
};

interface UserDict {
  [i: number]: User
}