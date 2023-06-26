function solution(cipher, code) {
    let string = "";
    
    for(let i = code; i <= cipher.length; i = i + code) {
        string += cipher[i - 1];
    }
    
    return string;
}