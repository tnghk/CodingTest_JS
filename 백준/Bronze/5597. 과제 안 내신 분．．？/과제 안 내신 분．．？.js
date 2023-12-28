let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n").map(Number);
let answer = '';

for (let i = 1; i <= 30; i++) {
    if (input.includes(i) === false) {
        answer += `${i}\n`;
    }
}

console.log(answer);