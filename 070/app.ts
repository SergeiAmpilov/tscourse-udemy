let strOrNum: string | number;
strOrNum = Math.random() > .5 ? 5 : 'hw';

let str2OrNumber: typeof strOrNum;

const user70 = {
  name: 'Vasilisa'
};

type keyOfUser = keyof typeof user70;


enum Direction {
  Up = 'Up',
  Down = 'Down'
};


type a70 = keyof typeof Direction;