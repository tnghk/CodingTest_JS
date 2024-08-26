let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n').map(v => v.trim());
let set1 = new Set(input[1].split(' '));
let set2 = new Set(input[2].split(' '));
let cnt = 0;

[...set1].forEach(v => {
  if(!set2.has(v)) {
    cnt++;
  }
});

[...set2].forEach(v => {
  if(!set1.has(v)) {
    cnt++;
  }
});

console.log(cnt);