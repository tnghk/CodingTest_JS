function solution(strArr) {
    const cnt = strArr.reduce((obj, str) => {
        if(!Object.keys(obj).includes(`${str.length}`))   {
            obj[str.length] = 0;
        }
        obj[str.length]++;
        return obj
    }, {});
    
    return Math.max(...Object.values(cnt));
}