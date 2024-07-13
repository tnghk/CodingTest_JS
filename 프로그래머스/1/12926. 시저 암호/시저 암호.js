function solution(s, n) {
    let answer = [...s].map(v => {
        if(v === ' ') {
            return v;
        }
        let code = v.toUpperCase().charCodeAt();
        let alpha = String.fromCharCode(code + n > 90 ? code + n - 26 : code + n);
        
        return v.toUpperCase() === v ? alpha : alpha.toLowerCase();
    }).join('');
    
    return answer;
}