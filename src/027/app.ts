function logId27(id: number | string): void {
  console.log(id);
}

// logId27(12);
// logId27('Sergei');

function multiply27(f: number, s?: number): number | void {
  if (!s) {
    return f**2;
  }
}


type VoidDunc27 = () => void;
const f27: VoidDunc27 = () => {};
const f2722: VoidDunc27 = () => {
  return 'abrahams'
};


const a27 = f2722();
console.log(a27);

console.log(f2722());