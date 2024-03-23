let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('').map(Number);
let sortedNum = input.sort((a, b) => b - a).join('');

console.log(sortedNum);