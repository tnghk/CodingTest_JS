let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim();
let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

console.log(arr.map(e => input.indexOf(e)).join(' '));