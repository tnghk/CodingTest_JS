function solution(i, j, k) {
    let cnt = 0;
    
    for(let num = i; num <= j; num++) {
        for(el of num.toString()) {
            if(Number(el) === k) {
                cnt++;
            }
        }
    }
    
    return cnt;
}