let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
let [n, m] = input[0].split(' ').map(Number);
let basket = Array.from({ length: n }, (_, i) => i + 1);

for (let i = 1; i < input.length; i++) {
    let [idx1, idx2] = input[i].split(' ').map(Number);
    let temp = basket[idx1 - 1];
    basket[idx1 - 1] = basket[idx2 - 1];
    basket[idx2 - 1] = temp;
}

console.log(basket.join(' '));