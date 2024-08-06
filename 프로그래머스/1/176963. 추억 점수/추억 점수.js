function solution(name, yearning, photo) {
    let score = name.reduce((s, c, i) => {
        s[c] = yearning[i];
        return s;
    }, {});
    let result = photo.map(arr => arr.reduce((acc, cur) => score[cur] ? acc + score[cur] : acc, 0));
    
    return result;
}