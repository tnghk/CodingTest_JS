let fs = require("fs");
let [N, inputTime] = fs.readFileSync("dev/stdin").toString().trim().split('\n');
let timeArr = inputTime.split(' ').map(Number).sort((a, b) => a - b);
let total = 0;
let time = 0;

for(let i = 0; i < N; i++) {
    time += timeArr[i];
    total += time;
}

console.log(total);