let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');

let cnt = input.slice(1).reduce((obj, cur, idx) => {
  let [_, ext] = cur.split('.').map(v => v.trim());

  if(!obj[ext]) {
    obj[ext] = 1;
  } else {
    obj[ext]++;
  }
  return obj;
}, {});

let sortedExt = Object.keys(cnt).sort().map(v => `${v} ${cnt[v]}`).join('\n');

console.log(sortedExt);