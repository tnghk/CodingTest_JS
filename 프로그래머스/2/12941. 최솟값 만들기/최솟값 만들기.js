function solution(A,B){
    let sortedA = A.sort((a, b) => a - b);
    let sortedB = B.sort((a, b) => b - a);
    let sum = 0;

    for(let i = 0; i < sortedA.length; i++) {
        sum += sortedA[i] * sortedB[i];
    }
    
    return sum;
}