let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(Number);
let numArr = input[1].split(' ').map(Number);
let queue = Array.from({ length: N }, (_, i) => i + 1);
let cnt = 0;

for (let i = 0; i < M; i++) {
  let numIdx = queue.indexOf(numArr[i]);

  if (numIdx <= queue.length / 2) {
    queue = queue.slice(numIdx).concat(queue.slice(0, numIdx));
    cnt += numIdx
  } else {
    queue = queue.slice(numIdx).concat(queue.slice(0, numIdx));
    cnt += queue.length - numIdx;
  }

  queue.shift();
}

console.log(cnt);