let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');
let cnt = {};

for(let i = 1; i < input.length; i++) {
  let book = input[i].trim();
  if(!cnt[book]) {
    cnt[book] = 1;
  } else {
    cnt[book]++;
  }
}

let answer = Object.entries(cnt).sort(([nameA, cntA], [nameB, cntB]) => {
  if(cntA === cntB) {
    return nameA < nameB ? -1 : 1;
  } else {
    return cntB - cntA;
  }
});

console.log(answer[0][0]);