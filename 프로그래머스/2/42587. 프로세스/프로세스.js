function solution(priorities, location) {
    let cnt = 0;
    
    while(true) {
        let cur = priorities.shift();
        location--;
        
        if(priorities.some(v => cur < v)) {
            priorities.push(cur);
            
            if(location < 0) {
                location = priorities.length - 1;
            }
        } else {
            cnt++;
            
            if(location === -1) {
                return cnt;
            }
        }
    }
    
    return cnt;
}