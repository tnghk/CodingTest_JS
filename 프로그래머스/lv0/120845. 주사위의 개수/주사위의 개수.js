function solution(box, n) {
    let answer = box.map(v => Math.floor(v / n)).reduce((acc, cur) => acc * cur);
    return answer;
}