function solution(n, k) {
    let money = n * 12000 + (k - Math.floor(n / 10)) * 2000;
    
    return money;
}