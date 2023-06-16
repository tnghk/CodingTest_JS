function solution(my_string) {
    let answer = [...my_string].filter(v => v.charCodeAt() > 47 && v.charCodeAt() < 58);
    return answer.map(v => +v).sort((a, b) => a - b);
}