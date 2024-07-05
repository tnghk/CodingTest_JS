let fs = require("fs");
let [N, F] = fs.readFileSync("dev/stdin").toString().trim().split('\n').map(Number);
N -= N % 100;

while(N % F !== 0) {
  N++;
}

let answer = N % 100 >= 10 ? N % 100 : '0' + (N % 100);
console.log(answer);