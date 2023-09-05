function solution(start, end_num) {
    var answer = [];
    return Array.from({length: start - end_num + 1}, (_, i) => start - i);
}