// function solution(my_string, indices) {
//     let answer = '';
    
//     for(let i of indices) {
        
//     }
// }



function solution(my_string, indices) {
    return indices.sort((a, b) => b - a).reduce((str, cur) => {
        str[cur] = '';
        return str;
    }, [...my_string]).join('');
}