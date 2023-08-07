function solution(x, n) {
    let answer = [];
    let num = x;
    
    while(answer.length < n) {
        answer.push(num);
        num += x;
    }
    
    return answer;
}