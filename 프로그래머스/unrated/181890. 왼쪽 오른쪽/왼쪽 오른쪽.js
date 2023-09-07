function solution(str_list) {
    const lIdx = str_list.indexOf("l");
    const rIdx = str_list.indexOf("r");
    
    if(lIdx === -1 || rIdx === -1){
        if(lIdx > -1)   return str_list.slice(0, lIdx);         // l만 있을 경우
        else if(rIdx > -1)  return str_list.slice(rIdx + 1);    // r만 있을 경우
        
        return [];  // l과 r 둘 다 없을 경우
    } 
    
    // l과 r 둘 다 있을 경우
    return lIdx < rIdx ? str_list.slice(0, lIdx) : str_list.slice(rIdx + 1);
}