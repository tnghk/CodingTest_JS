function solution(numer1, denom1, numer2, denom2) {
    let numer = numer1 * denom2 + numer2 * denom1;
    let denom = denom1 * denom2;
    
    let gcd = 1;  //최대공약수
    
    for(let i = 1; i <= denom; i++){
        if(numer % i == 0 && denom % i == 0){
            gcd = i;
        }
    }
    
    let answer = [numer/gcd, denom/gcd];
    
    return answer;
}