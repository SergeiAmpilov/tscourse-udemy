/* generics */


const ar58: Array<number> = [1, 2, 3];

async function test58() {
  const a = await new Promise<Number>((resolve, reject) => {
    resolve(1);
  });
}

const check58: Record<string, boolean> = {
  drive: true,
  check: false,
}

console.log(check58['drive']);
check58['speedLimit'] = true;
console.log(check58);