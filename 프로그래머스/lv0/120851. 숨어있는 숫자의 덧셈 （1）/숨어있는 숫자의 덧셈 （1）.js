function solution(my_string) {
    let answer = my_string.match(/\d/g).reduce((acc, cur) => +acc + +cur);
    return answer;
}