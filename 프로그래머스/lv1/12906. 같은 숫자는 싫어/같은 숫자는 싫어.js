function solution(arr){
    let answer = [];
    let num = -1;
    
    for(let i of arr) {
        if(num === i){
            continue;
        } else {
            num = i;
            answer.push(i);
        }
    }
    
    return answer;
}