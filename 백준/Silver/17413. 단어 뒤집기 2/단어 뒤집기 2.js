let fs = require("fs");
let S = fs.readFileSync("dev/stdin").toString().trim().split('');
let word = '';
let isTag = false;
let answer = '';

for(let i = 0; i < S.length; i++) {
  if(S[i - 1] === '>') {
    isTag = false;
  }
  
  if(S[i] === '<') {
    isTag = true;
    answer += word.split(' ').map(v => v.split('').reverse().join('')).join(' ');
    word = '';
  }

  
  if(isTag) {
    answer += S[i];
  } else {
    word += S[i];
  }
}

if(word.length > 0) {
  answer += word.split(' ').map(v => v.split('').reverse().join('')).join(' ');
}

console.log(answer);