let fs = require("fs");
let chessArr = fs.readFileSync("dev/stdin").toString().trim().split('\n');
let cnt = 0;

chessArr.forEach((chess, i) => {
  let square = chess.split('');
  if(i % 2 === 0) {
    cnt += square.filter((v, i) => v === 'F' && i % 2 === 0).length;
  } else {
    cnt += square.filter((v, i) => v === 'F' && i % 2 !== 0).length;
  }
})

console.log(cnt);