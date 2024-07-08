let fs = require("fs");
let [N, K] = fs.readFileSync("dev/stdin").toString().trim().split(' ').map(Number);
let order = Array.from({length: N}, (_, i) => i + 1);
let answer = [];

for(let i = 0; i < N; i++) {
  let num = 1;

  while(num < K) {
    order.push(order.shift());
    num++;
  }

  answer.push(order.shift());
}

console.log(`<${answer.join(', ')}>`);