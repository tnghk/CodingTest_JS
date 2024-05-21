let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');
let paper = Array.from({length: 100}, () => Array(100).fill(0));
let area = 0;

for (let i = 1; i <= input[0]; i++) {
  let [num1, num2] = input[i].split(' ').map(Number);

  for (let j = num1; j < num1 + 10; j++) {
    for (let k = num2; k < num2 + 10; k++) {
      if (paper[j][k] === 0) {
        paper[j][k] = 1;
        area++;
      }
    }
  }
}

console.log(area);