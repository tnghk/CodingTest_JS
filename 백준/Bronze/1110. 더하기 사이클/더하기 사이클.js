let fs = require("fs");
let N = Number(fs.readFileSync("dev/stdin").toString().trim());
let cnt = 0;
let num = N;

do {
  cnt++;
  let units = num % 10;
  let tens = Math.floor(num / 10);
  num = (units * 10) + ((units + tens) % 10);
}while(N !== num)

console.log(cnt);