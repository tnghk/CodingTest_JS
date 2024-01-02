let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim();
let str = input.split('').reverse().join('');

console.log(input === str ? 1 : 0);