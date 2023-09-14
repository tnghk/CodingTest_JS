function solution(arr) {
    let x = 0;
    let curArr = [...arr];
    let nextArr, flag = [];
    
    while(true) {
        nextArr = curArr.map(v => {
            if(v >= 50 && v % 2 === 0)  return v / 2;
            if(v < 50 && v % 2 === 1)   return v * 2 + 1;
            return v;
            });
        
        flag = curArr.map((v, i) => v === nextArr[i]);
        
        if(!flag.includes(false))  break;
        
        curArr = [...nextArr];
        x++;
    }
    
    return x;
}