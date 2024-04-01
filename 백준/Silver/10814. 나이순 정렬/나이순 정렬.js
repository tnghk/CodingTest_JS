let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');
let member = input.slice(1).map(v => v.split(' '));

member.sort((a, b) => Number(a[0]) - Number(b[0]));

console.log(member.map(v => v.join(' ')).join('\n'));