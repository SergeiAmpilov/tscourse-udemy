function logMiddleware(data: any): any {
  console.log(data);
  return data;
}


const res60 = logMiddleware(10);