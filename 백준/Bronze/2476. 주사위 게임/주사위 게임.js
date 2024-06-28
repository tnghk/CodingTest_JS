let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');
let money = [];

for(let i = 1; i <= input[0]; i++) {
  let [num1, num2, num3] = input[i].split(' ').map(Number);

  if(num1 === num2 && num2 === num3) {
    money.push(10000 + num1 * 1000);
    continue;
  } else if(num1 === num2 || num1 === num3) {
    money.push(1000 + num1 * 100);
    continue;
  } else if(num2 === num3) {
    money.push(1000 + num2 * 100);
    continue;
  } else {
    let max = Math.max(num1, num2, num3);
    money.push(max * 100);
  }
}

console.log(Math.max(...money));