let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');
let N = Number(input[0]);
let order = input[1].split(' ').map(Number);
let stack = [];
let num = 1;
let state = "Nice";

while(num <= N) {
    if(order[0] === num) {
        order.shift();
        num++;
        continue;
    } else if(stack[stack.length - 1] === num) {
        stack.pop();
        num++;
        continue;
    } else {
        stack.push(order.shift());
    }

    if(stack.length === N) {
        state = "Sad";
        break;
    }
}

console.log(state);