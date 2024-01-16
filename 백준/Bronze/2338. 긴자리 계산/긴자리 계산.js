let fs = require("fs");
let [A, B] = fs.readFileSync("dev/stdin").toString().split('\n').map(BigInt);

console.log(`${A + B}\n${A - B}\n${A * B}`);