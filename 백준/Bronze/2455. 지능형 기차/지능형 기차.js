let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');
let cnt = 0;
let max = 0;

input.forEach(v => {
  let [o, i] = v.split(' ').map(Number);
  cnt -= o;
  cnt += i;

  if(cnt > max) {
    max = cnt;
  }
});

console.log(max);