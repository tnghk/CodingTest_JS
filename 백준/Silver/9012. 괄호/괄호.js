let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');
let N = input[0];

for(let i = 1; i <= N; i++) {
    let stack = [];
    let arr = input[i].trim().split('');
    for(let j = 0; j < arr.length; j++) {
        if(arr[j] === '(') {
            stack.push(arr[j]);
        } else {
            if(stack[stack.length - 1] === '(') {
                stack.pop();
            } else {
                stack.push(arr[j]);
            }
        }
    }

    console.log(stack.length === 0 ? 'YES' : 'NO');
}