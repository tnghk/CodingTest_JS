let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');

for (let i = 1; i <= +input[0]; i++) {
    let [num1, num2] = input[i].split(' ').map(Number).sort((a, b) => a - b);
    let n = 1;

    while ((num2 * n) % num1 !== 0) {
        n++;
    }
    
    console.log(num2 * n);
}