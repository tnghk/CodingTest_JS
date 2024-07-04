let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');
let max = 0;
let cnt = 0;

for(let i = 0; i < input.length; i++) {
  let [out, on] = input[i].split(' ').map(Number);
  cnt = cnt - out + on;
  max = max < cnt ? cnt : max;
}

console.log(max);