function solution(str_list) {
    const lIdx = str_list.indexOf("l");
    const rIdx = str_list.indexOf("r")
    if(lIdx === -1 || rIdx === -1){
        if(lIdx > -1)   return str_list.slice(0, lIdx);
        else if(rIdx > -1)  return str_list.slice(rIdx + 1);
        else return [];
    } else if(lIdx < rIdx) {
        return str_list.slice(0, lIdx);
    } else {
        return str_list.slice(rIdx + 1);
    }
}