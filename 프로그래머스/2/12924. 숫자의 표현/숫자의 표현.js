function solution(n) {
    let sum = 0;
    let cnt = 1;
    
    for(let i = 1; i < Math.ceil(n / 2); i++) {
        sum = 0;

        for(let j = i; sum < n; j++) {
            sum += j;
            
            if(sum === n) {
                cnt++;
            }
        }
    }
    
    return cnt;
}