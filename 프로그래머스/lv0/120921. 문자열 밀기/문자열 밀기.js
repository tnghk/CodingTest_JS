function solution(A, B) {
    let word = [...A];
    let result = 0;
    
    while(true) {
        if(word.join('') === B) {
            break;
        }
        word.unshift(word[word.length - 1]);
        word.pop();
        result++;
        if(result > B.length){
            result = -1;
            break;
        }
    }
    return result;
}