function solution(s1, s2) {
    let result = 0;
    
    for(let i in s1){
        if(s2.includes(s1[i])){
            result++;
        }
    }
    
    return result;
}