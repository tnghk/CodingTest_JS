function solution(arr, flag) {
    return flag.reduce((array, cur, idx) => {
        if(cur) {
            return [...array, ...new Array(arr[idx] * 2).fill(arr[idx])]
        }
        return array.slice(0, -arr[idx])
    }, []);
}