let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');
let vowel = ["a", "e", "o", "u", "i"];

for(let i = 0; i < input.length - 1; i++) {
  let str = input[i].trim().toLowerCase();
  let cnt = [...str].filter(v => vowel.includes(v));
  console.log(cnt.length);
}