function solution(my_string, overwrite_string, s) {
    let string = [...my_string];
    string.splice(s, overwrite_string.length, overwrite_string);
    return string.join('');
}