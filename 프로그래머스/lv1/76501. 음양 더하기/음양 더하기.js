function solution(absolutes, signs) {
    return absolutes.reduce((acc, v, i) => signs[i] ? acc + v : acc - v, 0);
}