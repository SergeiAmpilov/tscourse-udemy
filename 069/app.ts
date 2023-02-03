/* Задача - реализовать функцию, которая принимает два параметра - 
  объект и строку название ключа.
  возвращает новую структуру с группировкой по ключу данных из первого аргумента */


interface Data {
  group: number;
  name: string;
}


const data: Data[] = [
  { group: 1, name: 'Vasia' },
  { group: 2, name: 'Petia' },
  { group: 1, name: 'Sveta' },
];

interface IGroup<T> {
  [key: string]: T[];
}


function groupByKey<T extends Record<string, any>>(arObj: T[], key: keyof T): IGroup<T> {

  let res: IGroup<T> = {};

  arObj.map( (el) => {
    
    const locKey = el[key];
    if (!res[locKey]) {
      res[locKey] = [];
    }

    res[locKey].push(el);
    
    return el;
  })


  return res;

}

console.log(groupByKey(data, 'group'));