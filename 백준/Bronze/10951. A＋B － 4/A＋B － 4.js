const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let answer = '';

rl.on('line', (line) => {
    let [a, b] = line.split(' ').map(Number);
    answer += `${a + b}\n`;

}).on("close", () => {
    console.log(answer);
    process.exit();
});