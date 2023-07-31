function solution(a, b) {
    let n1 = Number(a.toString() + b.toString());
    let n2 = 2 * a * b;
    return n1 >= n2 ? n1 : n2;
}