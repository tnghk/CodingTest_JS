function solution(n) {
    return (n + "").split("").reverse((a, b) => (a - b)).map(v => Number(v));
}