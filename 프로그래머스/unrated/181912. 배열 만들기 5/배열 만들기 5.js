function solution(intStrs, k, s, l) {
    return intStrs.reduce((arr, cur) => {
        const num = Number(cur.substring(s, l + s));
        if(num > k)
            arr.push(num);
        return arr;
    }, []);
}