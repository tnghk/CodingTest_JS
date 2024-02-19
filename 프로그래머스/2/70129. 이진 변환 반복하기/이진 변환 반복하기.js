function solution(s) {
    let zeroCnt = 0;
    let changeCnt = 0;
    
    while(s !== '1') {
        console.log(s);
        let arr = [...s];
        zeroCnt += arr.filter(v => v === '0').length;
        s = arr.filter(v => v === '1').length.toString(2);
        changeCnt++;
    }
    
    return [changeCnt, zeroCnt];
}