function solution(id_list, report, k) {
    let reportObj = {};
    let mailCnt = {};
    
    id_list.forEach(id => mailCnt[id] = 0);
    
    for(let r of report) {
        let [reporter, user] = r.split(' ');
        
        if(!reportObj[user]) {
            reportObj[user] = new Set();
        }
        reportObj[user].add(reporter);
    };
    
    for(let user of Object.keys(reportObj)) {
        if(reportObj[user].size >= k) {
            [...reportObj[user]].forEach(r => mailCnt[r]++);
        }
    }
    
    return Object.values(mailCnt);
}