let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let year = parseInt(input[0]);
let answer = (year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0);

console.log(+answer);