let fs = require("fs");
let num = Number(fs.readFileSync("dev/stdin").toString().trim());

function fibonacci(n) {
    if(n === 0) return 0;
    if(n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(num));