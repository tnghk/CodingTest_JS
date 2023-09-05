function solution(my_string) {
    const arr = new Array(52).fill(0);
    [...my_string].forEach(v => {
        if(v.toUpperCase() === v)   arr[v.charCodeAt() - 65]++;
        else    arr[v.charCodeAt() - 71]++;
        });
    return arr;
}