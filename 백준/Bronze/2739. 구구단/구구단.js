let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let [num] = input.map(Number);

for (let i = 1; i < 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
}