function solution(t, p) {
    let cnt = 0;
    
    for(let i = 0; i <= t.length - p.length; i++) {
        let sliceT = t.slice(i, i + p.length);
        cnt += Number(sliceT) <= p || 0;
    }
    
    return cnt;
}