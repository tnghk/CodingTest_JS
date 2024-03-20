function solution(progresses, speeds) {
    let answer = [];
    let num = 0;
    
    let days = progresses.map((v, i) => Math.ceil((100 - v) / speeds[i]));
    let day = days[0];
    
    for(let i = 0; i < days.length; i++)  {
        if(day < days[i]) {
            day = days[i];
            answer.push(num);
            num = 1;
        } else {
            num++;
        }
    }
    answer.push(num);
    
    return answer;
}