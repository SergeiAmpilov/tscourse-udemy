function logMiddleware<T>(data: T): T {
  console.log(data);
  return data;
}


const res60 = logMiddleware(10);
console.log(typeof res60);
const res59 = logMiddleware<string>('sdf');
console.log(typeof res59);
