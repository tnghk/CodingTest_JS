let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");
let score = input[1].split(' ').map(Number);
let max = Math.max(...score);
let newScore = score.map(e => e / max * 100);

console.log(newScore.reduce((acc, cur) => acc + cur) / Number(input[0]));