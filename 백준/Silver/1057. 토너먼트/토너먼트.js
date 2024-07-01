let fs = require("fs");
let [N, kim, lim] = fs.readFileSync("dev/stdin").toString().trim().split(' ').map(Number);
let round = 0;

while (lim !== kim) {
  round++;
  kim = Math.ceil(kim / 2);
  lim = Math.ceil(lim / 2);
}

console.log(round);