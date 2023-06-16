function factorial(n) {
    let num = BigInt(1);
    
    for(let i = 1; i < n + 1; i++) {
        num *= BigInt(i);
    }
    
    return num;
}

function solution(n) {
    let answer = 0;
    
    for(let i = 1; i < 11; i++) {
        if(factorial(i) > n) {
            break;
        }
        answer = i;
    }
    
    return answer;
}