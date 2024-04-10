let fs = require("fs");
let [num1, num2] = fs.readFileSync("dev/stdin").toString().trim().split(' ').map(Number);
let max = Math.max(num1, num2);
let min = Math.min(num1, num2);
let n = 1;

while ((max * n) % min !== 0) {
        n++;
    }

console.log(max * n);