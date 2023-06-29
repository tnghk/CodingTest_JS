function solution(array) {
    let answer = array.join('').split('').filter(v => v === "7");
    return answer.length;
}