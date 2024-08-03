function solution(n, arr1, arr2) {
    let binaryArr1 = arr1.map(v => "0".repeat(n - v.toString(2).length) + v.toString(2));
    let binaryArr2 = arr2.map(v => "0".repeat(n - v.toString(2).length) + v.toString(2));
    let answer = binaryArr1.map((s, sIdx) => [...s].map((v, vIdx) => +v || +binaryArr2[sIdx][vIdx] ? "#" : " ").join(''));
    
    return answer;
}