let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n').map(Number);
let avg = input.reduce((a, b) => a + b) / input.length;
let midIdx = input.sort((a, b) => a - b)[Math.floor(input.length / 2)];

console.log(avg);
console.log(midIdx);