function getFullNameObj(userEnt: {firstName: string, lastName: string}): string {
  return `Hello, ${userEnt.firstName} ${userEnt.lastName}!`;
}


const user = {
  firstName: 'Sergei',
  lastName: 'Ampilov',
  city: 'Samarqand',
  age: 37,
};


console.log(getFullNameObj(user));