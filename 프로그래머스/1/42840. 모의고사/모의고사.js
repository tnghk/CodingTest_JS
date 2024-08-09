function solution(answers) {
    let patterns = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
    let score = [0, 0, 0];
    
    for(let [i, answer] of answers.entries()) {
        for(let [j, pattern] of patterns.entries()) {
            if(answer === pattern[i % pattern.length]) {
                score[j]++;
            }
        }
    }
    
    let max = Math.max(...score);
    let answer = [];
    
    for(let i = 0; i < score.length; i++) {
        if(score[i] === max) {
            answer.push(i + 1);
        }
    }
    
    return answer;
}