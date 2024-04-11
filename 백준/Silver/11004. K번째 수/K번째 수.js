let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');
let [N, K] = input[0].split(' ').map(Number);
let sortedNum = input[1].split(' ').map(Number).sort((a, b) => a - b);

console.log(sortedNum[K - 1]);