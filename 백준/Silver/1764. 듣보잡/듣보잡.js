let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n').map(v => v.trim());
let [N, M] = input[0].split(' ').map(Number);
let noHeard = new Set(input.slice(1, N + 1));
let noSee = new Set(input.slice(N + 1, input.length + 1));

let answer = [...noHeard].filter(v => noSee.has(v)).sort();
answer.unshift(answer.length);
console.log(answer.join('\n'));