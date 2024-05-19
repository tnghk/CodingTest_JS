let fs = require("fs");
let str = fs.readFileSync("dev/stdin").toString().trim();
let changedStr = [...str].map(v => v.toUpperCase() === v ? v.toLowerCase() : v.toUpperCase()).join('');

console.log(changedStr);