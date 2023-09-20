function solution(picture, k) {
    return picture.reduce((arr, cur) => {
        let row = [...cur].map(e => e.repeat(k)).join('')
        for(let i = 0; i < k; i++) {
            arr.push(row);
        }
        return arr;
    }, []);
}