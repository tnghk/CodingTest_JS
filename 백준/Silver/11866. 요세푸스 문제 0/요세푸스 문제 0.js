let fs = require("fs");
let [N, K] = fs.readFileSync("dev/stdin").toString().trim().split(' ').map(Number);
let queue = Array.from({length: N}, (_, i) => i + 1);
let answer = [];

while(queue.length !== 0) {
  for(let i = 0; i < K - 1; i++) {
    let num = queue.shift();
    queue.push(num);
  }

  answer.push(queue.shift());
}

console.log(`<${answer.join(', ')}>`);