function solution(babbling) {
    let arr = ["aya", "ye", "woo", "ma"];
    
    for(let i of arr) {
        babbling = babbling.map(v => v.includes(i)? v.replace(i, ' ') : v);
    }
    
    let cnt = babbling.length - (babbling.filter(v => v.trim()).length);
    
    return cnt;
}