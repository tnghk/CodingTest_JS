let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');
let rank = [];

for(let i = 1; i <= input[0]; i++) {
  let [x1, y1] = input[i].split(' ').map(Number);
  let cnt = 0;

  for(let j = 1; j <= input[0]; j++) {
    if(i === j) {
      continue;
    }

    let [x2, y2] = input[j].split(' ').map(Number);

    if(x1 < x2 && y1 < y2) {
      cnt++;
    }
  }

  rank.push(cnt + 1);
}

console.log(rank.join(' '))