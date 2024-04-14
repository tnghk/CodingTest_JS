let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');
let students = input.slice(1).map(v => {
    let [name, korean, english, math] = v.split(' ');
    return {name, korean: +korean, english: +english, math: +math}
});
students.sort((a, b) => {
    if (a.korean !== b.korean) return b.korean - a.korean;
    if (a.english !== b.english) return a.english - b.english;
    if (a.math !== b.math) return b.math - a.math;
    if(a.name > b.name) return 1;
    if(a.name < b.name) return -1;
    return 0;
});

console.log(students.map(v => v.name).join('\n'));