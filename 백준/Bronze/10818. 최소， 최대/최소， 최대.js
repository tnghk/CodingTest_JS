let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");
let numArr = input[1].split(' ');

console.log(`${Math.min(...numArr)} ${Math.max(...numArr)}`);