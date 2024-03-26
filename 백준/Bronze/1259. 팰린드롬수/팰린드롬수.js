let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');

for(let i = 0; i < input.length - 1; i++) {
    let num = input[i].trim();
    let isPalindrome = 'yes';
    for(let j = 0; j < num.length / 2; j++) {
        if(num[j] !== num[num.length - 1 - j]) {
            isPalindrome = 'no';
        }
    }

    console.log(isPalindrome);
}