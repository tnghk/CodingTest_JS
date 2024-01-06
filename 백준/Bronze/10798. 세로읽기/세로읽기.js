let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');
let arr = input.map(e => e.trim().split(''));
let maxLength = Math.max(...arr.map(e => e.length));
let answer = '';

for(let i = 0; i < maxLength; i++) {
    answer += arr.map(e => e[i]).join('');
}

console.log(answer);