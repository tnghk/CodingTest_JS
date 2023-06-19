function solution(sides) {
    let last = [];
    
    for(let i = 1; i <= Math.max(...sides); i++) {
        if(i + Math.min(...sides) > Math.max(...sides)) {
            last.push(i);
        }
    }
    
    for(let i = Math.max(...sides) + 1; i < Math.max(...sides) + Math.min(...sides); i++) {
        last.push(i);
    }
    
    return last.length;
}

//가장 긴 변 < 나머지 변들의 합
//sides 중 한 변이 가장 긴 변일 경우
//나머지 한 변이 가장 긴 변일 경우