let fs = require("fs");
let N = Number(fs.readFileSync("dev/stdin").toString().trim());

for(let i = N; i > 0; i--) {
  console.log(" ".repeat(N - i) + "*".repeat(i));
}