let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split('\n');
let numArr = input[1].split(' ').map(Number);
let cnt = numArr.reduce((acc, cur) => {
    let measure = Array(cur).fill().map((_, i) => i + 1).filter(e => cur % e === 0);
    
    return measure.length === 2 ? acc + 1 : acc;
}, 0);

console.log(cnt);