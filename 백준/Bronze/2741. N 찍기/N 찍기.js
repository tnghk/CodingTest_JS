let fs = require("fs");
let N = Number(fs.readFileSync("dev/stdin").toString());
let arr = Array(N).fill(0).map((_, i) => i + 1);

console.log(arr.join('\n'));