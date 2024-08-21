let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n').map(v => v.trim());
let [N, M] = input[0].split(' ').map(Number);
let S = new Set(input.slice(1, N + 1));
let cnt = 0;

for(let i = N + 1; i < input.length; i++) {
  if(S.has(input[i])) {
    cnt++;
  }
}

console.log(cnt);