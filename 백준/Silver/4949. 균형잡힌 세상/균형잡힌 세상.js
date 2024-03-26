let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n').map(s => s.trim());

for (let i = 0; i < input.length - 1; i++) {
    let str = input[i];
    let stack = [];
    for (let j = 0; j < str.length - 1; j++) {
        if (str[j] === '(' || str[j] === '[') {
            stack.push(str[j]);
        }
        
        if (str[j] === ')' || str[j] === ']') {
            if (str[j] === ')' && stack[stack.length - 1] === '(') {
                stack.pop();
            } else if (str[j] === ']' && stack[stack.length - 1] === '[') {
                stack.pop();
            } else {
                stack.push(str[j]);
            }
        }
    }

    console.log(stack.length === 0 ? 'yes' : 'no');
}