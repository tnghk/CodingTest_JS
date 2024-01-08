let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim();
let strArr = input.toLocaleUpperCase().split('');
let alphaCnt = strArr.reduce((acc, cur) => {
    if(acc[cur]) {
        acc[cur] += 1;
    } else {
        acc[cur] = 1;
    }

    return acc;
}, {});

let max = Math.max(...Object.values(alphaCnt));
let maxAlpha = Object.keys(alphaCnt).filter(key => alphaCnt[key] === max)

console.log(maxAlpha.length > 1 ? '?' : maxAlpha[0]);