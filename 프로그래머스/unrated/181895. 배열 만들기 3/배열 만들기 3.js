function solution(arr, intervals) {
    return intervals.reduce((array, cur) => array.concat(arr.slice(cur[0], cur[1] + 1)), []);
}