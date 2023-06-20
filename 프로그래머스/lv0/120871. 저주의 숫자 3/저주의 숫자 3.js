function solution(n) {
    let townNum = 0;
    
    for(let num = 1; num <= n; num++) {
        townNum++;
        while(townNum % 3 === 0 || townNum.toString().includes("3")) {
            townNum++;
        }
    }
    
    return townNum;
}