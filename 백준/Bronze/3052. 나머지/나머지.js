let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n").map(Number);
let arr = new Set(input.map(e => e % 42));

console.log([...arr].length);