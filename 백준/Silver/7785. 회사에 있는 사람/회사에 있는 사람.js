let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');
let record = new Set();

for(let i = 1; i < input.length; i++) {
  let [name, type] = input[i].trim().split(' ');
  if(type === "enter") {
    record.add(name);
  }
  if(type === "leave") {
    record.delete(name);
  }
}

console.log([...record].sort().reverse().join('\n'));