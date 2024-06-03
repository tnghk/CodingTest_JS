let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n').map(Number);
let unitArr = [25, 10, 5, 1];

for (let i = 1; i <= input[0]; i++) {
  let change = '';
  let left = input[i];
  for (let j = 0; j < unitArr.length; j++) {
    let cnt = Math.floor(left / unitArr[j]);
    change += cnt + " ";
    left -= unitArr[j] * cnt;

  }
  console.log(change.trim());
}