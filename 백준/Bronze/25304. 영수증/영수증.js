const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let list = [];
rl.on('line', (line) => {
    list.push(line);

    if (list.length - 2 === Number(list[1])) {
        rl.close();
    }
}).on("close", () => {
    let sum = 0;

    for (let i = 2; i < list.length; i++) {
        let [price, cnt] = list[i].split(' ').map(Number);
        sum += price * cnt;
    }

    console.log(Number(list[0]) === sum ? "Yes" : "No")
    process.exit();
});