let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split(' ');
let n = BigInt(input[0]);
let m = BigInt(input[1]);

console.log(n / m + '\n' + n % m);