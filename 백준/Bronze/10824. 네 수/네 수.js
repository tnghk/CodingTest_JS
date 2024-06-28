let fs = require("fs");
let [A, B, C, D] = fs.readFileSync("dev/stdin").toString().trim().split(' ');
let num1 = A + B;
let num2 = C + D;
console.log(Number(num1) + Number(num2));