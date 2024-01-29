let fs = require("fs");
let course = fs.readFileSync("dev/stdin").toString().trim().split('\n');
let GPA = { 'A+': 4.5, 'A0': 4.0, 'B+': 3.5, 'B0': 3.0, 'C+': 2.5, 'C0': 2.0, 'D+': 1.5, 'D0': 1.0, 'F': 0.0 };
let creditTotal = 0;
let sum = 0;

for (let i = 0; i < course.length; i++) {
    let [_, credit, grade] = course[i].split(' ');

    if (grade === 'P') continue;

    sum += +credit * GPA[grade.trim()];
    creditTotal += +credit;
}

console.log(sum / creditTotal);