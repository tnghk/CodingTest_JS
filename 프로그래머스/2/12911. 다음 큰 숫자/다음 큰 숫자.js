function solution(n) {
    let nCnt = [...n.toString(2)].filter(v => v === "1").length;
    
    while(true) {
        n++;
        if(nCnt === [...n.toString(2)].filter(v => v === "1").length) {
            return n;
        }
    }
}