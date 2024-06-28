let fs = require("fs");
let N = Number(fs.readFileSync("dev/stdin").toString().trim());
console.log(N * (N - 1));