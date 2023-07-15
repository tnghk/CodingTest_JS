function solution(num_list) {
    let arr = num_list.map(v => v >= 0);
    return arr.indexOf(false);
}