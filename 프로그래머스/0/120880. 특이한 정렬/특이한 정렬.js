function solution(numlist, n) {
    let sortedNum = numlist.map(v => [v, Math.abs(v - n)]).sort((a, b) => {
        if(a[1] === b[1]) {
            return b[0] - a[0];
        }
        return a[1] - b[1];
    });
    
    return sortedNum.map(v => v[0]);
}