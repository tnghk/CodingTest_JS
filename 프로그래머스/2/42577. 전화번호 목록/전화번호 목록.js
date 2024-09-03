function solution(phone_book) {
    let mapPB = new Map();
    
    for(let phone of phone_book) {
        mapPB.set(phone, true)
    }
    
    for(let i = 0; i < phone_book.length; i++) {
        let prefix = '';
        for(let char of phone_book[i]) {
            prefix += char;
            
            if(mapPB.has(prefix) && prefix !== phone_book[i]) {
                return false;
            }
        }
    }
    
    return true;
}