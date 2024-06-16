let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');
let [N, K] = input[0].split(' ').map(Number);
let coinArr = input.slice(1).map(Number);
let cnt = 0;
let left = K;

for(let i = N - 1; i >= 0; i--) {
  if(left >= coinArr[i]) {
    let coins = Math.floor(left / coinArr[i]);
    cnt += coins;
    left -= coins * coinArr[i];
  }
}

console.log(cnt)