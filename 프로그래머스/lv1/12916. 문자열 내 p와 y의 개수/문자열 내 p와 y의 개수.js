function solution(s){
    let cntP = 0;
    let cntY = 0;
    
    for(let i of s) {
        if(i.toLowerCase() === "p") cntP++;
        if(i.toLowerCase() === "y") cntY++;
    }

    if (cntP === cntY){
        return true;
    } else {
        return false;
    }
}