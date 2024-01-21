let fs = require("fs");
let num = Number(fs.readFileSync("dev/stdin").toString());

while(num !== 1) {
    for(let i = 2; i <= num; i++) {
        if(num % i === 0) {
            console.log(i);
            num /= i;
            break;
        }
    }
}