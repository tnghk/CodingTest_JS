function solution(my_string, index_list) {
    let answer = "";
    
    for(i of index_list){
        answer += my_string[i];
    }
    
    return answer;
}