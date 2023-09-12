function solution(arr, k) {
    let array = [...new Set(arr)].slice(0, k);
    return array.length < k ? [...array, ...new Array(k - array.length).fill(-1)] : array;
}