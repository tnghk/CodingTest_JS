let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');
let want = input[1].split(' ');
let already = new Set(want);

console.log(want.length - [...already].length);