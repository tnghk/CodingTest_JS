let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n').map(v => v.trim());
let N = input[0];
let stack = [];
let answer = '';

for(let i = 1; i <= N; i++) {
    if(input[i].includes('push')) {
        let [_, X] = input[i].split(' ');
        stack.push(Number(X));
    } else if(input[i] == 'pop') {
        answer += (stack.length !== 0 ? stack.pop() : -1) + '\n';
    } else if(input[i] === 'size') {
        answer += stack.length + '\n';
    } else if(input[i] === 'empty') {
        answer += +(stack.length === 0) + '\n';
    } else if(input[i] === 'top'){
        answer += (stack.length !== 0 ? stack[stack.length - 1] : -1) + '\n';
    }
}

console.log(answer);