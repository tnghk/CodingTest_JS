function solution(picture, k) {
    return picture.reduce((arr, cur) => {
        for(let i = 0; i < k; i++) {
            arr.push([...cur].map(e => e.repeat(k)).join(''));
        }
        return arr;
    }, []);
}