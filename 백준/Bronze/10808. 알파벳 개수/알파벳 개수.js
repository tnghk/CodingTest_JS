let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim();
let alphabet = Array(26).fill(0);

for(let i = 0; i < input.length; i++) {
    alphabet[input.charCodeAt(i) - 97] += 1;
}

console.log(alphabet.join(' '));