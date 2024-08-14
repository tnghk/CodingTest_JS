function solution(participant, completion) {
    let obj = {};
    
    participant.map(n => {
        if(!obj[n]) {
            obj[n] = 1;
        } else {
            obj[n]++;
        }
    });
    
    completion.map(n => obj[n]--);
    
    return Object.keys(obj).filter(v => obj[v] !== 0)[0];
}