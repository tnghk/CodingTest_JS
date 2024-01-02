let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim();
let alpha = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

for (let i = 0; i < alpha.length; i++) {
    if (input.includes(alpha[i])) {
        input = input.replaceAll(alpha[i], ' ')
    }
}

console.log(input.length);