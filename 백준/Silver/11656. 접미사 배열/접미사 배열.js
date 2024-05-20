let fs = require("fs");
let S = fs.readFileSync("dev/stdin").toString().trim();
let arr = [];

[...S].forEach((_, i) => arr.push(S.slice(i)));

console.log(arr.sort().join('\n'));