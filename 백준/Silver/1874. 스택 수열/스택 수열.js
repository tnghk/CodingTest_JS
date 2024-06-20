let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n').map(Number);
let stack = [];
let answer = [];
let current = 1;

for (let i = 1; i <= input[0]; i++) {
  while (stack[stack.length - 1] !== input[i]) {
    if(input[i] < current) {
      console.log("NO");
      return;
    }
    stack.push(current);
    answer.push("+");
    current++;
  }

  stack.pop();
  answer.push("-");

}

console.log(answer.join('\n'));