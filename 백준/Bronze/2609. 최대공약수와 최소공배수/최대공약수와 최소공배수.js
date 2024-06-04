let fs = require("fs");
let [min, max] = fs.readFileSync("dev/stdin").toString().trim().split(' ').map(Number).sort((a, b) => a - b);
let gcd = 0;  //최대공약수
let lcm = 0;  //최소공배수

for(let i = min; i >= 1; i--) {
  if(min % i === 0 && max % i === 0) {
    gcd = i;
    break;
  }
}

for(let i = 1; i <= min; i++) {
  if((max * i) % min === 0) {
    lcm = max * i;
    break;
  }
}

console.log(gcd);
console.log(lcm);