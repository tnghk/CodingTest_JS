let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');
let wordArr = [...new Set(input.slice(1))];
let sortedWord = wordArr.sort((a, b) => a.length - b.length || a.localeCompare(b));

console.log(sortedWord.join('\n'));