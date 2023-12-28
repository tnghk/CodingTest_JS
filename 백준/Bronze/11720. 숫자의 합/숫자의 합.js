let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

console.log(input[1].split('').reduce((acc, cur) => acc + Number(cur), 0));