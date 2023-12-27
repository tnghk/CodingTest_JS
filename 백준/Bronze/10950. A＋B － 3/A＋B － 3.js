const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let cnt = 0;
rl.on('line', (line) => {
    if (cnt === 0) cnt = Number(line);
    else input.push(line);

    if (input.length === cnt) {
        rl.close();
    }
}).on("close", () => {
    for (let i = 0; i < input.length; i++) {
        let [a, b] = input[i].split(' ').map(Number);
        console.log(a + b);
    }
    process.exit();
});