let fs = require("fs");
let N = Number(fs.readFileSync("dev/stdin").toString().trim());
let cnt = 0;
let num = 666;

while(true) {
  if(num.toString().includes('666')) {
    cnt++;
    if(cnt === N) {
      break;
    }
  }

  num++;
}

console.log(num);