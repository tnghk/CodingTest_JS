function solution(n) {
    let answer = [];
    
    for(let i = 0; i < n; i++) {
        answer.push(new Array(n).fill(0));
        answer[i][i] = 1;
    }
    return answer;
}