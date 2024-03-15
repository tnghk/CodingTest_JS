let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n').map(Number);
let sortedNum = input.slice(1).sort((a, b) => a - b);

console.log(sortedNum.join('\n'));