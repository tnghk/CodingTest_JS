function solution(arr, queries) {
    for(let q=0;q<queries.length;q++) {
        const [s, e] = queries[q];
        for(let i=s;i<=e;i++)
            arr[i]++;  
    }

    return arr;
}