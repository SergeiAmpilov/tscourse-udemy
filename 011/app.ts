function getFullName(firstName: string, lastName: string): string {
  return `Hello, ${firstName} ${lastName}!`;
}

const getFullNameArrow = (firstName: string, lastName: string): string => {
  return `Hello, ${firstName} ${lastName}!`;
}

console.log(getFullName('Sergei', 'Ampilov'));
console.log(getFullNameArrow('Artur', 'Pirozkov'));