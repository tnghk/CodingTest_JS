let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n').map(Number);
let total = input.reduce((acc, cur) => acc + cur);
let min = Math.floor(total / 60);
let sec = total - (min * 60);

console.log(min);
console.log(sec);