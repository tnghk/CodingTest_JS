let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
let stringArr = input.splice(1).map(e => e.trim());

console.log(stringArr.map(e => e[0] + e[e.length - 1]).join('\n'));