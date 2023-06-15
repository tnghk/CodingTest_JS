function factorial(n) {   
    let num = BigInt(1);
    
    for(let i = 1; i < n + 1; i++){
        num *= BigInt(i);
    }
    
    return num;
}

function solution(balls, share) {
    let answer = factorial(balls) / (factorial(balls - share) * factorial(share));
    return answer;
}