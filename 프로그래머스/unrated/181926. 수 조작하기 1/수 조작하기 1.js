function solution(n, control) {
    
    for(i of control) {
       switch(i){
           case "w": n++; break;
           case "s": n--; break;
           case "d": n += 10; break;
           case "a": n -= 10; break;
           default: break;
       }
    }  
    
    return n;
}