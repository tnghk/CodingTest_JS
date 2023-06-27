function solution(my_string) {
    let stringArr = [];
    
    for(i of my_string) {
        if(!stringArr.includes(i)){
            stringArr.push(i);
        }
    }
    
    return stringArr.join('');
}