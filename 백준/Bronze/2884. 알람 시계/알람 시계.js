let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let hour = parseInt(input[0]);
let min = parseInt(input[1]);

if(min >= 45) {
    min -= 45;
    console.log(`${hour} ${min}`);
} else {
    hour = hour === 0 ? 23 : hour - 1;
    min = min + 60 - 45;
    console.log(`${hour} ${min}`);
}