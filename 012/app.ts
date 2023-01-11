function getFullNameObj(userEnt: {firstName: string, lastName: string}): string {
  return `Hello, ${userEnt.firstName} ${userEnt.lastName}!`;
}


const user = {
  firstName: 'Sergei',
  lastName: 'Ampilov',
  city: 'Samarqand',
  age: 37,
  skills: {
    ts: true,
    php: true,
  },
};


console.log(getFullNameObj(user));