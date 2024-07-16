function solution(s) {
    let pos = {};
    let answer = [];
    
    [...s].forEach((c, i) => {
        if(pos[c] === undefined) {
            pos[c] = i;
            answer.push(-1);
            return;
        }
        
        answer.push(i - pos[c]);
        pos[c] = i;
    });
    
    return answer;
}