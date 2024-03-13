let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');

for(let i = 1; i <= input[0]; i++) {
    let c = input[i].split(' ');
    let n = Number(c[0]);
    let scoreArr = c.slice(1);
    let avg = scoreArr.reduce((acc, cur) => acc + Number(cur), 0) / n;
    let percent = scoreArr.filter(v => v > avg).length / n * 100;
    console.log(percent.toFixed(3) + '%');
}