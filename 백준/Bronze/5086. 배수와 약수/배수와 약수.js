let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split('\n');

for(let i = 0; i < input.length; i++) {
    let [num1, num2] = input[i].split(' ').map(Number);

    if(num1 === 0 && num2 === 0) {
        break;
    }
    
    if(num1 % num2 === 0){
        console.log('multiple');
    } else if(num2 % num1 === 0) {
        console.log('factor');
    } else {
        console.log('neither');
    }
}