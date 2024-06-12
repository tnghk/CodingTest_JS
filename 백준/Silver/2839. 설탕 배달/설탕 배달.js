let fs = require("fs");
let N = Number(fs.readFileSync("dev/stdin").toString().trim());
let cnt = Math.floor(N / 5);

while(true) {
  let leftKg = N - (cnt * 5);

  if(cnt < 0) {
    console.log(-1);
    break;
  }
  
  if(leftKg % 3 === 0) {
    cnt += leftKg / 3;
    console.log(cnt);
    break;
  }

  cnt--;
}