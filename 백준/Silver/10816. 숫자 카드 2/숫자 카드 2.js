let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');
let cnt = {};

input[1].split(' ').forEach(num => {
  if(!cnt[num]) {
    cnt[num] = 1;
  } else {
    cnt[num]++;
  }
});

let answer = input[3].split(' ').map(num => cnt[num] ? cnt[num] : 0);

console.log(answer.join(' '));