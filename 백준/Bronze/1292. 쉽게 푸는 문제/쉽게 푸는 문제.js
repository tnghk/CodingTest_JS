let fs = require("fs");
let [start, end] = fs.readFileSync("dev/stdin").toString().trim().split(' ').map(Number);
let cnt = 1;
let sec = 1;
let sum = 0;

while (true) {
  for (let i = 0; i < cnt; i++) {
    if (sec > end) {
      console.log(sum);
      return;
    }
    if (sec >= start) {
      sum += cnt;
    }
    sec++;
  }
  cnt++;
}