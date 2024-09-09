let fs = require("fs");
let [N, M] = fs.readFileSync("dev/stdin").toString().split(' ');
let answer = Math.abs(Number(N) - Number(M));
console.log(answer);