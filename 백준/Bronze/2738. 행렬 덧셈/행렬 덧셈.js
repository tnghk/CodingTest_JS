let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');
let N = input[0].split(' ').map(Number)[0];
let arr1 = input.slice(1, N + 1).map(e => e.split(' ').map(Number));
let arr2 = input.slice(N + 1).map(e => e.split(' ').map(Number));

let answer = arr1.reduce((acc, cur, idx) => {
    acc.push(cur.map((e, i) => arr2[idx][i] + e));
    return acc;
}, [])

console.log(answer.map(e => e.join(' ')).join('\n'));