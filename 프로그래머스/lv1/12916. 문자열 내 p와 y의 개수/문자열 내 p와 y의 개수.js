function solution(s){
    const cntP = s.toLowerCase().split('p').length - 1;
    const cntY = s.toLowerCase().split('y').length - 1;

    return cntP === cntY;
}