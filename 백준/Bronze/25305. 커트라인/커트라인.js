let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');
let k = input[0].split(' ')[1];
let sortedScore = input[1].split(' ').map(Number).sort((a, b) => b - a);

console.log(sortedScore[k - 1]);