let fs = require("fs");
let [A, B, C] = fs.readFileSync("dev/stdin").toString().split('\n').map(v => v.trim());
console.log(+A + +B - +C);
console.log(A + B - C);