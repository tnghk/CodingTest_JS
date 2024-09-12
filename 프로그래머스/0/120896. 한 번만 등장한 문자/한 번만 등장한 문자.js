function solution(s) {
    let result = [];
    [...s].forEach(v => {
        if(s.indexOf(v) === s.lastIndexOf(v)) {
            result.push(v);
        }
    });
    
    return result.sort().join('');
}