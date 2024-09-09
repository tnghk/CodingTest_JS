let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split(' ');
let answer = input.map(v => +v * +v).reduce((acc, cur) => acc + cur) % 10;
console.log(answer);