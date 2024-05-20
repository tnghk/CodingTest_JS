let fs = require("fs");
let S = fs.readFileSync("dev/stdin").toString().trim();
let arr = [];

for(let i = 0; i < S.length; i++) {
  for(let j = i + 1; j <= S.length; j++) {
    arr.push(S.slice(i, j));
  }
}

console.log([...new Set(arr)].length);