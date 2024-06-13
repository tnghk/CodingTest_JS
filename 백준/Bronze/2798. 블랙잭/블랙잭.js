let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(Number);
let numArr = input[1].split(' ').map(Number);
let answer = 0;

for(let i = 0; i < numArr.length; i++) {
  for(let j = i + 1; j < numArr.length; j++) {
    for(let k = j + 1; k < numArr.length; k++) {
      let sum = numArr[i] + numArr[j] + numArr[k];

      if(sum <= M && sum >= answer) {
        answer = sum;
      }
    }
  }
}

console.log(answer);