// function solution(str_list) {
//     const lIdx = str_list.indexOf("l");
//     const rIdx = str_list.indexOf("r");
    
//     if(lIdx === -1 || rIdx === -1){
//         if(lIdx > -1)   return str_list.slice(0, lIdx);         // l만 있을 경우
//         else if(rIdx > -1)  return str_list.slice(rIdx + 1);    // r만 있을 경우
        
//         return [];  // l과 r 둘 다 없을 경우
//     } 
    
//     // l과 r 둘 다 있을 경우
//     return lIdx < rIdx ? str_list.slice(0, lIdx) : str_list.slice(rIdx + 1);
// }


// function solution(str_list) {
    
//     for(let i = 0; i < str_list.length; i++) {
//         if(str_list[i] === "l")    return str_list.slice(0, i);
//         if(str_list[i] === "r")    return str_list.slice(i + 1);
//     }
    
//     return [];
// }

function solution(str_list) {
  const i = str_list.findIndex((str) => str === "l" || str === "r");
    
  if (i === -1) return [];
    
  return str_list[i] === 'l' ? str_list.slice(0, i) : str_list.slice(i + 1);
}
