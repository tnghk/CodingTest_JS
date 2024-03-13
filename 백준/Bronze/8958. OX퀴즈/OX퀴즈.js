let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');

for(let i = 1; i < input.length; i++) {
    let resultArr = input[i].split('');
    let total = 0;
    let score = 0;

    for(let j = 0; j < resultArr.length; j++) {
        if(resultArr[j] === 'O') {
            score += 1;
            total += score;
        } else {
            score = 0;
        }
    }

    console.log(total);
}