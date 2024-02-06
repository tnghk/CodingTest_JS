function solution(s) {
    let answer = s.toLowerCase().split(' ').map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(' ');
    
    return answer;
}