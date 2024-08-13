function solution(progresses, speeds) {
    let days = progresses.map((v, i) => Math.ceil((100 - v) / speeds[i]));
    let max = 0;
    let answer = days.reduce((arr, cur) => {
        if(cur > max) {
            max = cur;
            arr.push(1);
        } else {
            arr[arr.length - 1]++;
        }
        
        return arr;
    }, []);
    
    return answer;
}