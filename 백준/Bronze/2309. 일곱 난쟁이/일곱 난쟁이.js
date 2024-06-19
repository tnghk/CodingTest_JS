let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n').map(Number);

for(let i = 0; i < input.length; i++) {
  for(let j = i + 1; j < input.length; j++) {
    let dwarfs = input.filter((_, idx) => i !== idx && j !== idx);
    let sum = dwarfs.reduce((acc, cur) => acc + cur, 0);
    
    if(sum === 100) {
      console.log(dwarfs.sort((a, b) => a - b).join('\n'));
      return;
    }
  }
}