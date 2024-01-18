let fs = require("fs");
let [N, K] = fs.readFileSync("dev/stdin").toString().split(' ').map(Number);
let measure = [];
for (let i = 1; i <= N; i++) {
    if (N % i === 0) {
        measure.push(i);
    }
}

console.log(measure.length < K ? 0 : measure[K - 1]);