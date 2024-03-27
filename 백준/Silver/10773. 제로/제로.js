let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n').map(Number);
let K = input[0];
let stack = [];

for(let i = 1; i <= K; i++) {
    if(input[i] !== 0) {
        stack.push(input[i]);
    } else {
        stack.pop();
    }
}

console.log(stack.length !== 0 ? stack.reduce((a, b) => a + b) : 0);