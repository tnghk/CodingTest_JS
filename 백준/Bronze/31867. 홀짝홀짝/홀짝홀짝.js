let fs = require("fs");
let [N, K] = fs.readFileSync("dev/stdin").toString().trim().split('\n');
let numArr = K.split('');
let evenLen = numArr.filter(v => Number(v) % 2 === 0).length;

console.log(evenLen > numArr.length / 2 ? 0 : evenLen < numArr.length / 2 ? 1 : -1)