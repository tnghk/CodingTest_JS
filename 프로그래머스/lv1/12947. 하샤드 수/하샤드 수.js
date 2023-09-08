function solution(x) {
    const sum = (x + '').split('').reduce((acc, cur) => acc + Number(cur), 0);
    return !(x % sum);
}

// 속도 더 빠름
// function solution(x) {
//     let num = x;
//     let sum = 0;
//     do {
//         sum += x%10;
//         x = Math.floor(x/10);
//     } while (x>0);

//     return !(num%sum);
// }
