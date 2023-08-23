function solution(n) {
    let num = 2;
    
    while(n % num !== 1) {
        num++
    }
    
    return num;
}