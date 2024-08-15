function solution(want, number, discount) {
    let product = {};
    let cnt = 0;
    want.map((v, i) => product[v] = number[i]);
    
    for(let i = 0; i < discount.length - 9; i++) {
        let obj = {...product}
        for(let j = i; j < i + 10; j++) {
            if(obj[discount[j]]) {
                obj[discount[j]]--;
            }
        }
        
        if(!Object.values(obj).some(v => v >= 1)) {
            cnt++;
        }
    }
    return cnt
}