function solution(n) {
    let str = "수박".repeat(Math.floor(n / 2));
    return n % 2 ?  str + "수" : str;
}