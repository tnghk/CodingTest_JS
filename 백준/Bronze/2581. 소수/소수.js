let fs = require("fs");
let [M, N] = fs.readFileSync("dev/stdin").toString().split('\n').map(Number);
let decimal = [];

for (let i = M; i <= N; i++) {
    let isDecimal = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isDecimal = false;
            break;
        }
    }

    if (isDecimal && i !== 1) {
        decimal.push(i);
    }
}

if (decimal.length === 0) {
    console.log(-1);
} else {
    console.log(decimal.reduce((acc, cur) => acc + cur));
    console.log(decimal[0]);
}