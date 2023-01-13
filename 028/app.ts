let input28: unknown;
// let input28: any;

input28 = {};
input28 = 'tr';
input28 = [1,2,3];


let res28: any = input28;

console.log(res28, typeof res28);


if (typeof input28 === 'number') {
  input28++;
}



try {

} catch(error) {

  const e27: Error = error as Error;
  
  /*
  if (error instanceof Error) {
    console.log(error.message);
  }
  */
}