function solution(a, b, c, d) {
    const cnt = {};
    [a, b, c, d].forEach(el => {
        if(!cnt[el]) cnt[el] = 0;
        cnt[el]++;
    })
    
    const key = Object.keys(cnt).map(v => Number(v));
    
    if(key.length === 1) {
        return 1111 * a;
    }    
    else if(key.length === 4) {
        return Math.min(...key.map(v => Number(v)));
    }
    else if(key.length === 3) {
        const [num1, num2] = key.filter(v => cnt[v] === 1);
        return num1 * num2
    }
    else if(Object.values(cnt).includes(3)) {
        const num1 = key.filter(v => cnt[v] === 3)[0];
        const num2 = key.filter(v => cnt[v] === 1)[0];
        return Math.pow(10 * num1 + num2, 2);
    }
    else {
        return (key[0] + key[1]) * Math.abs(key[0] - key[1]); 
    }
}