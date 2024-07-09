let fs = require("fs");
let [A, B] = fs.readFileSync("dev/stdin").toString().trim().split(' ');
let min = A.length;

for(let i = 0; i <= B.length - A.length; i++) {
  let str = B.slice(i, A.length + i);
  let cnt = [...str].filter((v, i) => v !== A[i]).length;
  min = min > cnt ? cnt : min;
}

console.log(min);