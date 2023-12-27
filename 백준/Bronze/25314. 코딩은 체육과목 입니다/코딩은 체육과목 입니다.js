let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

console.log(`${'long '.repeat(Math.floor(Number(input) / 4))}int`);