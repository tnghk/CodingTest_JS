function solution(arr1, arr2) {
    let sum1 = arr1.reduce((acc, cur) => acc + cur);
    let sum2 = arr2.reduce((acc, cur) => acc + cur);
    return arr1.length > arr2.length ? 1 : 
           arr1.length < arr2.length ? -1 :
           sum1 > sum2 ? 1 : sum1 < sum2 ? -1 : 0;
}