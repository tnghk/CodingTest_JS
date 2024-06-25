let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n').map(Number);
let total = input[0];
let price = input.slice(1).reduce((acc, cur) => acc + cur);

console.log(total - price);