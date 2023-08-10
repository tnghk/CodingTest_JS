function solution(s) {
    let answer = '';
    let idx = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === " ") {
            idx = 0;
            answer += " ";
            continue;
        }
        
        answer += idx % 2 ? s[i].toLowerCase() : s[i].toUpperCase();
        idx++;
    }
    return answer;
}