let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');
let rowMax = input.map((e, rowIndex) => {
    let arr = e.split(' ').map(Number);
    let maxNum = Math.max(...arr);
    let idx = arr.indexOf(maxNum) + 1;
    return [maxNum, rowIndex + 1, idx];
});

let max = rowMax.reduce((maxArr, cur) => maxArr[0] <= cur[0] ? cur : maxArr, [0, 0, 0]);

console.log(`${max[0]}\n${max[1]} ${max[2]}`);