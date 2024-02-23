function solution(a, b) {
    let min = Math.min(a, b);
    
    for(let i = 2; i <= min; i++) {
        if(a % i === 0 && b % i === 0){
            a = a / i;
            b = b / i;
            i--;
        }
    }
    
    while(b % 2 === 0 || b % 5 === 0) {
        b = b % 2 === 0 ? b / 2 : b / 5;
    }
    
    return b === 1 ? 1 : 2;
}