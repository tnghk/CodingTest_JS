let fs = require("fs");
let [A, B] = fs.readFileSync("dev/stdin").toString().trim().split(' ').map(BigInt);

console.log((A + B).toString());