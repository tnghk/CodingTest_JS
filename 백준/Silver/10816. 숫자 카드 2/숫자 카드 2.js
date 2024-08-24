let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');
let cntMap = new Map();

input[1].split(' ').forEach(num => {
  if(!cntMap.has(num)) {
    cntMap.set(num, 1);
  } else {
    let cnt = cntMap.get(num);
    cntMap.set(num, cnt + 1);
  }
});

let answer = input[3].split(' ').map(num => cntMap.has(num) ? cntMap.get(num) : 0);
console.log(answer.join(' '));