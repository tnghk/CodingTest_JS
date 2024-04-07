let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');

for (let i = 0; i < input.length - 1; i++) {
    let [edge1, edge2, edge3] = input[i].split(' ').map(Number).sort((a, b) => b - a);

    if (edge1 < edge2 + edge3) {
        if (edge1 === edge2 && edge2 === edge3) {
            console.log("Equilateral");
        } else if(edge1 !== edge2 && edge1 !== edge3 && edge2 !== edge3) {
            console.log("Scalene");
        } else {
            console.log("Isosceles");
        }
    } else {
        console.log("Invalid");
    }

}