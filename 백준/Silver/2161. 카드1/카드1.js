let fs = require("fs");
let N = Number(fs.readFileSync("dev/stdin").toString().trim());
let queue = Array.from({length: N}, (_, i) => i + 1);
let answer = [];

while(queue.length !== 1) {
  answer.push(queue.shift());
  queue.push(queue.shift());
}
answer.push(queue.shift());

console.log(answer.join(' '));