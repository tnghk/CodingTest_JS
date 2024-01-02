let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim();
let num = Number(input);
let answer = '';
let gap = num - 1;

for (let i = 1; i <= 2 * num - 1; i++) {
    answer += ' '.repeat(gap) + '*'.repeat((2 * num - 1) - (gap * 2));
    gap = i < num ? gap - 1 : gap + 1;

    if(i !== 2 * num - 1) {
        answer += '\n';
    }
}

console.log(answer);