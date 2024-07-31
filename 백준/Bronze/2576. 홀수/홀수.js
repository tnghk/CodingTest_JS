let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n').map(Number);
let odd = input.filter(v => v % 2 === 1);

if (odd.length === 0) {
  console.log(-1);
} else {
  let sum = odd.reduce((acc, cur) => acc + cur);
  let min = Math.min(...odd);

  console.log(sum);
  console.log(min);
}