const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
    input.push(line);
    if (input.length === 2) {
        rl.close();
    }
}).on("close", () => {
    let [num1, num2] = input.map(Number);
    let answer = num1 > 0 ? (num2 > 0 ? 1 : 4) : (num2 > 0 ? 2 : 3);
    console.log(answer);
    process.exit();
});
