/* tuples - кортежи */

const [a15, b15] = [1, 'lesson'];
console.log(a15, b15);

const skl15: ( number | string | boolean )[] = [1 , 'TypeScript', 15, true];
console.log(skl15[0], skl15[1]);
console.log(skl15);

const city15: [number, string, ...boolean[]] = [3, 'Samarqand', true, false, true];
