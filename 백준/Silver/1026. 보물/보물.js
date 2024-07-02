let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');
let A = input[1].split(' ').map(Number);
let B = input[2].split(' ').map(Number);
let sortedA = A.sort((a, b) => a - b);
let sortedB = B.sort((a, b) => b - a);

let answer = sortedA.reduce((acc, cur, i) => acc + (cur * sortedB[i]), 0);
console.log(answer);