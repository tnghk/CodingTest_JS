let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n').map(v => v.trim());
let N = Number(input[0]);
let stack = [];
let answer = '';

for(let i = 1; i <= N; i++) {
    if(input[i].includes('1 ')) {
        let [_, num] = input[i].split(' ');
        stack.push(Number(num));
    }
    if(input[i] === '2') {
        answer += (stack.length !== 0 ? stack.pop() : -1) + '\n';
    }
    if(input[i] === '3') {
        answer += stack.length + '\n';
    }
    if(input[i] === '4') {
        answer += +(stack.length === 0) + '\n';
    }
    if(input[i] === '5') {
        answer += (stack.length !== 0 ? stack[stack.length - 1] : -1) + '\n';
    }
}

console.log(answer);