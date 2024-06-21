let fs = require("fs");
let S = fs.readFileSync("dev/stdin").toString().trim().split('');
let stack = [];

for (let i = 0; i < S.length; i++) {
  if (S[i] === ")" && stack[stack.length - 1] === "(") {
    stack.pop();
    continue;
  }
  stack.push(S[i]);
}

console.log(stack.length);