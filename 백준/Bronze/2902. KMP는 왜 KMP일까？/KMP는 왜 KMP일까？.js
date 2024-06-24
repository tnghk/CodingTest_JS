let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('-');
let answer = input.map(v => v[0]).join('');
console.log(answer);