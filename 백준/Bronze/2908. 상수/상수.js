let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split(" ");
let [num1, num2] = input;

console.log(Math.max(Number([...num1].reverse().join('')), Number([...num2].reverse().join(''))));