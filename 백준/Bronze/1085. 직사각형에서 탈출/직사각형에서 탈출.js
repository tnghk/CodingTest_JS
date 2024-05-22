let fs = require("fs");
let [x, y, w, h] = fs.readFileSync("dev/stdin").toString().trim().split(' ').map(Number);
let min = Math.min(x, y, w - x, h - y);

console.log(min);