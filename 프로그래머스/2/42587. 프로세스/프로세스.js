function solution(priorities, location) {
    let cnt = 1;
    
    while(true) {
        let cur = priorities.shift();
        
        if(priorities.filter(v => cur < v).length) {
            priorities.push(cur);
            location = location === 0 ? priorities.length - 1 : location - 1;
            continue;
        }
        
        if(location === 0) {
            return cnt;
        } else {
            location--;
            cnt++;
            continue;
        }
    }
    
    return cnt;
}