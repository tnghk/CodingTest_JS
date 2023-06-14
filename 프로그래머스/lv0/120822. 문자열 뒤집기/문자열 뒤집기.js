function solution(my_string) {
    let answer = [];
    
    for (let i in my_string) {
        answer.unshift(my_string[i]);
    }
    
    return answer.join('');
}