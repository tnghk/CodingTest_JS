let fs = require("fs");
let [X, Y] = fs.readFileSync("dev/stdin").toString().trim().split(' ');
let sum = Number([...X].reverse().join('')) + Number([...Y].reverse().join(''));
console.log(Number([...sum.toString()].reverse().join('')));