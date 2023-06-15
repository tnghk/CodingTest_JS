function solution(numbers, direction) {
    let answer = [];
    
    if(direction === "right") {
        answer.push(...numbers.slice(-1));
        answer.push(...numbers.slice(0, -1))
    } else {
        answer.push(...numbers.slice(1));
        answer.push(numbers[0]);
    }
    return answer;
}