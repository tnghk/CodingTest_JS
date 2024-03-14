let fs = require("fs");
let [A, B, V] = fs.readFileSync("dev/stdin").toString().trim().split(' ').map(Number);

let days = Math.ceil((V - B) / (A - B));
console.log(days);