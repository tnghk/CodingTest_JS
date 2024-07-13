function solution(d, budget) {
    let support = [...d].sort((a, b) => a - b);
    let total = support.reduce((acc, cur) => acc + cur);
    
    while(total > budget) {
        total -= support.pop();
    }
    
    return support.length;
}