let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');
let file = input.slice(1).map(v => v.trim());

let answer = file.reduce((pat, cur) => {
  if(pat === '') {
    return cur;
  } 
  pat = [...pat].map((v, i) => v === cur[i] ? v : '?').join('');

  return pat;
}, '');

console.log(answer);