function solution(s) {
    let numArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    numArr.forEach((v, i) => {
        if(s.includes(v)) {
           s = s.replaceAll(v, i);
        }
    })
    
    return Number(s);
}