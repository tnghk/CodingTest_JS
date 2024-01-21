let fs = require("fs");
let [A, B, C] = fs.readFileSync("dev/stdin").toString().split('\n').map(Number);
let mul = A * B * C;
let cntArr = Array(10).fill(0);

mul.toString().split('').forEach(num => cntArr[Number(num)]++);

console.log(cntArr.join('\n'));