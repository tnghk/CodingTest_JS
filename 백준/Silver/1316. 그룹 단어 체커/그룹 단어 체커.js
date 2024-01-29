let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');
let words = input.slice(1).map(e => e.trim());
let wordCnt = 0;

for(let word of words) {
    let alpha = [...new Set(word.split(''))];
    let alphaCnt = alpha.map(e => [...word].filter(a => a === e).length);
    
    wordCnt += alpha.every((e, i) => word.includes(e.repeat(alphaCnt[i])))
}

console.log(wordCnt)