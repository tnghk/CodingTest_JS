let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');
let num = new Set(input.slice(1).map(Number));
let sortedNum = [...num].sort((a, b) => a - b);

console.log(sortedNum.join('\n'));