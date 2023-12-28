let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
let arr = input.splice(1).map(e => e.split(' '));

console.log(arr.map(([num, str]) => [...str].map(e => e.repeat(Number(num))).join('')).join('\n'));