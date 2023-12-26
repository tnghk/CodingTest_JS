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
    let [hour, min] = input[0].split(' ').map(Number);
    let time = Number(input[1]);
    min += time;

    if(min >= 60) {
        hour += Math.floor(min / 60);
        hour = hour >= 24 ? hour - 24 : hour;
        min = min % 60;
    }

    console.log(`${hour} ${min}`);
    process.exit();
});