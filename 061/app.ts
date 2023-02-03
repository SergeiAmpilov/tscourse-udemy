function toStringGeneric61<T>(data: T): string | undefined {

  if (typeof data === 'string') {
    return data;
  }

  if (typeof data === 'number') {
    return data.toString();
  }

  if (typeof data === 'boolean') {
    return `${data}`;
  }

  if (typeof data === 'object' && !Array.isArray(data) && data !== null) {
    return JSON.stringify(data);
  }

  if (Array.isArray(data)) {
    return data.join(' - ');
  }


  return undefined;

}

console.log(toStringGeneric61<string>('asd'));
console.log(toStringGeneric61<number>(234));
console.log(toStringGeneric61<boolean>(false));
console.log(toStringGeneric61({
  a: 1,
  b: false,
  c: 32,
  d: [1,2,3],
}));

console.log(toStringGeneric61([
  56, 98, 'dfdf'
]));
