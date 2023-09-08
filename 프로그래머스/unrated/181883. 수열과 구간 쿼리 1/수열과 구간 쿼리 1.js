function solution(arr, queries) {
    return queries.reduce((array, [q1, q2]) => array.map((num, i) => q1 <= i && i <= q2 ? num + 1 : num), arr)
}