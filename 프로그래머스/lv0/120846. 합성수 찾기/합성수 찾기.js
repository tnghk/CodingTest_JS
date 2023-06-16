function solution(n) {
    let answer = [];
    
    for(let i = 2; i <= n; i++) {
        for(let j = 2; j < i; j++) {
            if(i % j === 0){
                answer.push(i);
                break;
            }
        }
    }
    return answer.length;
}