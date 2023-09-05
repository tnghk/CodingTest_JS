function solution(my_string, indices) {
    return indices.sort((a, b) => b - a).reduce((str, cur) => {
        str.splice(cur, 1);
        return str;
    }, [...my_string]).join('');
}