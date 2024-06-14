let fs = require("fs");
let N = fs.readFileSync("dev/stdin").toString().trim();
let cnt = 0;

if (N < 100) {
  cnt = N;
} else {
  cnt = 99;

  for (let i = 100; i <= N; i++) {
    let digitArr = i.toString().split('').map(Number);
    let num = digitArr[0] - digitArr[1];

    for (let j = 2; j < digitArr.length; j++) {
      if (num === digitArr[j - 1] - digitArr[j]) {
        cnt++;
      }
    }
  }

}

console.log(cnt);