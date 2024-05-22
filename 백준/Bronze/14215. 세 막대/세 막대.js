let fs = require("fs");
let [max, mid, min] = fs.readFileSync("dev/stdin").toString().trim().split(' ').map(Number).sort((a, b) => b - a);

while(max >= mid + min) {
  max--;
}

console.log(max + mid + min);