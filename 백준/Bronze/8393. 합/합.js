let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let [num] = input.map(Number);
let sum = 0;

for (let i = 1; i <= num; i++) {
    sum += i;
}

console.log(sum);