let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');
let answer = input.slice(1).map((v, i) => `Case #${i + 1}: ${v.split(' ').map(w => w.trim()).reverse().join(' ')}`).join('\n');

console.log(answer);