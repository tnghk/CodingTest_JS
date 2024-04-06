let fs = require("fs");
let [angle1, angle2, angle3] = fs.readFileSync("dev/stdin").toString().trim().split('\n').map(Number);
let sum = angle1 + angle2 + angle3;

if(angle1 === 60 && angle2 === 60 && angle3 === 60) {
    console.log("Equilateral");
} else if(sum === 180) {
    if(angle1 === angle2 || angle1 === angle3 || angle2 === angle3) {
        console.log("Isosceles");
    } else {
        console.log("Scalene");
    }
} else {
    console.log("Error");
}