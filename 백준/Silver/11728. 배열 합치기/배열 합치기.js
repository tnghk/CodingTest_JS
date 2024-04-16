let fs = require("fs");
let [_, A, B] = fs.readFileSync("dev/stdin").toString().trim().split('\n').map(v => v.split(' '));
let sortedNum = A.concat(B).sort((a, b) => Number(a) - Number(b));

console.log(sortedNum.join(' '));