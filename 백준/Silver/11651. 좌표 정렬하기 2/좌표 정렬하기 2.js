let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');
let pos = input.slice(1).map(v => v.split(' ').map(Number));

pos.sort((a, b) => {
    let [a1, a2] = a;
    let [b1, b2] = b;

    if(a2 < b2) return -1;
    else if(a2 === b2) {
        if(a1 < b1) return -1;
        else if(a1 > b1) return 1;
        else return 0;
    } 
    else return 1;
});

console.log(pos.map(v => v.join(' ')).join('\n'));