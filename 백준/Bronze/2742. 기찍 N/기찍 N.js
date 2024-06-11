let fs = require("fs");
let N = fs.readFileSync("dev/stdin").toString().trim();
let answer = '';

for (let i = +N; i > 0; i--) {
  answer += i + '\n';
}

console.log(answer);