function solution(my_string) {
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    
    for(let i in vowel) {
        my_string = my_string.replaceAll(vowel[i], '');
    }
    
    return my_string;
}