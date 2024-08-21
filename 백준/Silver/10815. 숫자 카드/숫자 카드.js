let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');
let card = new Set(input[1].split(' ').map(Number));
let num = input[3].split(' ').map(v => card.has(+v) ? 1 : 0);

console.log(num.join(' '));