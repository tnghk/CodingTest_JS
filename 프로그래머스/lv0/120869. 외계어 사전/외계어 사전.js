function solution(spell, dic) {
    let arr = [...dic].filter(v => v.length === spell.length);
    
    for(let i in arr) {
        for(let j in spell) {
            if(arr[i].includes(spell[j])) {
                arr[i] = arr[i].replace(spell[j], "");
            }
        }
    }
    
    return arr.includes("") ? 1 : 2;
}