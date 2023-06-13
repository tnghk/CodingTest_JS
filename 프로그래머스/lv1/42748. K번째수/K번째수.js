function solution(array, commands) {
    let answer = [];
    let arr = [];
    
    for(let i in commands) {
       arr = array.slice(commands[i][0] - 1, commands[i][1]); 
       answer.push(arr.sort((a, b) => a - b)[commands[i][2] - 1]);
    }
    
    return answer;
}