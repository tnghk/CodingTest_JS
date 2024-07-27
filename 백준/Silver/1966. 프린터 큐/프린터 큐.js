let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');

for(let i = 1; i < input.length; i += 2) {
  let [N, M] = input[i].split(' ').map(Number);
  let queue = input[i + 1].split(' ').map((v, i) => [Number(v), i]);
  let cnt = 0;

  while(true) {
    let [curNum, curIdx] = queue.shift();
    
    if(queue.some(v => curNum < v[0])) {
      queue.push([curNum, curIdx]);
    } else {
      cnt++;
      if(M === curIdx) {
        console.log(cnt);
        break;
      }
    }
  }
}