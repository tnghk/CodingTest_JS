let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split(' ').map(Number).sort((a, b) => a - b);
let num = input[2];

while(true) {
  let cnt = input.filter(v => num % v === 0).length;

  if(cnt >= 3) {
    break;
  }
  num++;
}

console.log(num);