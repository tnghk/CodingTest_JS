let fs = require("fs");
let [A, B] = fs.readFileSync("dev/stdin").toString().trim().split(' ').map(Number);
let cnt = Math.floor((B - A) / 2);

if(A % 2 === 1 && B % 2 === 0) {
  cnt = Math.ceil((B - A) / 2);
}else if((A % 2 === 0 && B % 2 === 0) || (A % 2 === 1 && B % 2 === 1)) {
  cnt = Math.floor((B - A) / 2) + 1;
}else {
  cnt = Math.floor((B - A) / 2) + 2;
}

console.log(cnt);