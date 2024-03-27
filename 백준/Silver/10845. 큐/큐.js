let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n').map(v => v.trim());
let N = Number(input[0]);
let queue = [];
let answer = '';

for(let i = 1; i <= N; i++) {
    if(input[i].includes('push')) {
        let [_, num] = input[i].split(' ');
        queue.push(num);
    } else if(input[i] === 'pop') {
        answer += (queue.length !== 0 ? queue.shift() : -1) + '\n';
    } else if(input[i] === 'size') {
        answer += queue.length + '\n';
    } else if(input[i] === 'empty') {
        answer += +(queue.length === 0) + '\n';
    } else if(input[i] === 'front') {
        answer += (queue.length !== 0 ? queue[0] : -1) + '\n';
    } else if(input[i] === 'back') {
        answer += (queue.length !== 0 ? queue[queue.length - 1] : -1) + '\n';
    }
}

console.log(answer);