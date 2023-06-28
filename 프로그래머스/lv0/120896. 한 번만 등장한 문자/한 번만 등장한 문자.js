function solution(s) {
    let cnt = {};
    let result = [];
    [...s].map(v => cnt[v] === undefined ? cnt[v] = 1 : cnt[v] = cnt[v] + 1);
    result = Object.entries(cnt).filter(([, count]) => count === 1).sort();
    
    return result.reduce((acc, cur) => acc + cur[0], "");
}