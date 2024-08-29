function solution(enroll, referral, seller, amount) {
    let recommend = {};
    let profit = {};
    
    for(let i = 0; i < enroll.length; i++) {
        recommend[enroll[i]] = referral[i];
        profit[enroll[i]] = 0;
    }
        
    for(let i = 0; i < seller.length; i++) {
        let money = amount[i] * 100;
        let curName = seller[i];
        
        while(money >= 1 && curName !== "-") {
            profit[curName] += money - Math.floor(money / 10);
            money = Math.floor(money / 10);
            curName = recommend[curName];
        }
    }
    
    return Object.values(profit);
}