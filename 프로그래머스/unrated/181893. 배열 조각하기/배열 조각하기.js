function solution(arr, query) {
    return query.reduce((array, num, idx) => {
        if(idx % 2 === 0)   return array.slice(0, query[idx] + 1);
        else return array.slice(query[idx]);
    }, arr);
}