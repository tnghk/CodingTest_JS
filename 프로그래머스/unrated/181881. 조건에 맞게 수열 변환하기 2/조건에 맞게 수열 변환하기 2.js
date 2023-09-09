function solution(arr) {
    let cnt = 0;
    let arr2 = arr.slice(0);
    
    console.log(arr2);
    while(true) {
        let arr1 = arr2.slice(0);
        arr2 = arr1.map(v => {
            if(v >= 50 && v % 2 === 0)  return v / 2;
            if(v < 50 && v % 2 === 1)   return v * 2 + 1;
            return v;
            });
        
        let flag = arr1.map((v, i) => v === arr2[i]);
        
        if(!flag.includes(false))   break;
        cnt++;
    }
    
    return cnt;
}