let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n').map(v => v.split(' '));
let pos = [[], []];
let answer = '';

input.forEach(([num1, num2]) => {
  pos[0].push(Number(num1));
  pos[1].push(Number(num2));
});

pos.map(arr => arr.sort((a, b) => a - b));

answer = pos[0][0] === pos[0][1] ? pos[0][2] : pos[0][0];
answer += pos[1][0] === pos[1][1] ? ' ' + pos[1][2]: ' ' + pos[1][0];

console.log(answer);