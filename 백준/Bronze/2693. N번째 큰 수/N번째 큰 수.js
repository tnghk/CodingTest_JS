let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');

for(let i = 1; i <= input[0]; i++) {
    let arr = input[i].split(' ').map(Number).sort((a, b) => b - a);

    console.log(arr[2]);
}