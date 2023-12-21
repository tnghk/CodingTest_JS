const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
    input.push(line);
})
  .on('close', function () {
  const [a, b] = input;
    console.log(a * (b % 100 % 10));
    console.log(a * Math.floor(b % 100 / 10));
    console.log(a * Math.floor(b / 100));
    console.log(a * b);
  process.exit();
});
