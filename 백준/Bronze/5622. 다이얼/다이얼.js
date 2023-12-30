let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("");
let dial = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];
let time = input.reduce((acc, cur) => {
    dial.forEach((e, i) => {
        if (e.includes(cur)) {
            acc += i + 3
        }
    })
    return acc;
}, 0);

console.log(time);