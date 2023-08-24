function solution(a, b) {
    num1 = parseInt(a.toString() + b);
    num2 = parseInt(b.toString() + a);
    return num1 > num2 ? num1 : num2;
}