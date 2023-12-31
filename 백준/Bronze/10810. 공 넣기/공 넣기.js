let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
let [n, m] = input[0].split(' ').map(Number);
let bascket = new Array(n).fill(0);

for (let i = 1; i <= m; i++) {
    let [num1, num2, num3] = input[i].split(' ').map(Number);
    bascket = bascket.map((e, i) => i + 1 >= num1 && i + 1 <= num2 ? num3 : e);
}

console.log(bascket.join(' '));