function solution(rsp) {
    const RSP = {
        0: 5,
        2: 0,
        5: 2
    };
    
    return rsp.split('').map(v => RSP[v]).join('');
}