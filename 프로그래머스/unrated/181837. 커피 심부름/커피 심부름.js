function solution(order) {
    let answer = 0;
    
    for(let i of order) {
        if(i.includes("cafelatte"))
            answer += 5000;
        else 
            answer += 4500;
    }
    return answer;
}