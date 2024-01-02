let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split(" ").map(Number);
let piece = [1, 1, 2, 2, 2, 8];

console.log(piece.map((e, i) => e - input[i]).join(' '));