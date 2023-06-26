function solution(order) {
    let cnt = 0;
    let elArr = [...order.toString()];
    
    for(i in elArr) {
        if(elArr[i] === "3" || elArr[i] === "6" || elArr[i] === "9"){
            cnt++;
        }
    }
    
    return cnt;
}