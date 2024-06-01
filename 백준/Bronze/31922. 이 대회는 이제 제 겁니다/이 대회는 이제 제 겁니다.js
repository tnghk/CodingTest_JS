let fs = require("fs");
let [A, P, C] = fs.readFileSync("dev/stdin").toString().trim().split(' ').map(Number);

console.log(A + C > P ? A + C : P);