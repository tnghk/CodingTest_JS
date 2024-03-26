let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');
let arr = input.slice(1).map(v => v.split(','));
let result = arr.map(([num1, num2]) => Number(num1) + Number(num2));

console.log(result.join('\n'));