function solution(arr, queries) {
    
    return queries.map(query => {
        let array = arr.slice(query[0], query[1] + 1).filter(v => v > query[2])
        return array.length ? Math.min(...array) : -1;
    })
}