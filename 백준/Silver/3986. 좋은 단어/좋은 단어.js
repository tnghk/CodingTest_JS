let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');
let stack = [];
let cnt = 0;

for(let i = 1; i < input.length; i++) {
  let str = input[i].trim();

  for(let j = 0; j < str.length; j++) {
    if(stack[stack.length - 1] === str[j]) {
      stack.pop();
    } else {
      stack.push(str[j]);
    }
  }

  if(stack.length === 0) {
    cnt++;
  }

  stack = [];
}

console.log(cnt);