let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

console.log(input[1].split(' ').filter(v => v === input[2]).length);