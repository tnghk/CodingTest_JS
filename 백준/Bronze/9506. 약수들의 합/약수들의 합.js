let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split('\n').map(Number);

for (let i = 0; i <= input.length; i++) {
    if (input[i] === -1) {
        break;
    }

    let measure = Array(input[i]).fill().map((_, i) => i + 1).filter(e => input[i] % e === 0 && input[i] !== e);
    let sum = measure.reduce((acc, cur) => acc + cur);

    if(sum === input[i]) {
        console.log(`${input[i]} = ${measure.join(' + ')}`);
    } else {
        console.log(`${input[i]} is NOT perfect.`);
    }
}