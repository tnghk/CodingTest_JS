let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n').map(v => v.trim());
let cnt = 0;
let answer = '';

function recursion(s, l, r) {
    cnt++;
    if(l >= r)  return 1;
    else if(s[l] != s[r])   return 0;
    else return recursion(s, l + 1, r - 1);
}

function isPalindrome(s) {
    return recursion(s, 0, s.length - 1);
}

for(let i = 1; i <= +input[0]; i++) {
    cnt = 0;
    answer += `${isPalindrome(input[i])} ${cnt}\n`
}

console.log(answer);