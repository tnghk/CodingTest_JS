function solution(my_string) {
    let change = "";
    
    for(i of my_string){
        if(i === i.toUpperCase()){
            change += i.toLowerCase();
        } else {
            change += i.toUpperCase();
        }
    }
    
    return change;
}