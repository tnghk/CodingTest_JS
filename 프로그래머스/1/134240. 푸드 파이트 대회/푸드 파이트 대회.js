function solution(food) {
    let answer = food.reduce((str, cur, idx) => {
        if(idx === 0) {
            return str;
        }
        str += idx.toString().repeat(Math.floor(cur / 2));
        return str;
    }, '');
    
    answer += '0' + [...answer].reverse().join('');
    
    return answer
}