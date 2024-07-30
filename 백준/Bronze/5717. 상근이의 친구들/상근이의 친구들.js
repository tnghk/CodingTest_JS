let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');

for(let i = 0 ; i < input.length - 1; i++) {
  let [m, w] = input[i].split(' ').map(Number);

  console.log(m + w);
}