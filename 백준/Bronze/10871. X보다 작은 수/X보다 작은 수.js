let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");
let X = Number(input[0].split(' ')[1]);
let A = input[1].split(' ');

console.log(A.filter(v => Number(v) < X).join(' '));