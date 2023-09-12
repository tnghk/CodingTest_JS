function solution(myStr) {
    let answer = myStr.split(/[abc]/g).filter(v => v);
    return answer.length === 0 ? ["EMPTY"] : answer;
}