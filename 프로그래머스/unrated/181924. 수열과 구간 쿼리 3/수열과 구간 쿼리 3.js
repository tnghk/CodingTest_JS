function solution(arr, queries) {
    for(let i = 0; i < queries.length; i++) {
        let num = arr[queries[i][0]];
        arr.splice(queries[i][0], 1, arr[queries[i][1]]);
        arr.splice(queries[i][1], 1, num);
    }
    return arr;
}