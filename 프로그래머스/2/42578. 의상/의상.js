function solution(clothes) {
    let clothesMap = new Map;
    
    clothes.forEach(([n, k]) => {
        if(!clothesMap.has(k)) {
            clothesMap.set(k, [n]);
        } else {
            let arr = clothesMap.get(k);
            arr.push(n);
            clothesMap.set(k, arr);
        }
    });
    
    if(clothesMap.size === 1) {
        let [value] = clothesMap.values();
        return value.length;
    }
    
    let cnt = 1;
    
    for(let value of clothesMap.values()) {
        cnt *= value.length + 1;
    }
    
    return cnt - 1;
}