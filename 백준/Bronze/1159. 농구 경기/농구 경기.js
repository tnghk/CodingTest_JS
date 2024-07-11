let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');
let player = input.slice(1);
let cnt = {};

player.forEach(name => {
  let first = name[0];

  if(!cnt[first]) {
    cnt[first] = 1;
  } else {
    cnt[first]++;
  }
});

let select = Object.keys(cnt).filter(first => cnt[first] >= 5);
console.log(select.length === 0 ? "PREDAJA" : select.sort().join(''));