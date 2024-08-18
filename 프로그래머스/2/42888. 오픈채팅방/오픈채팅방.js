function solution(record) {
    let userId = {};
    let order = [];
    record.forEach(user => {
        let [type, id, nickname = null] = user.split(' ')
        if(type === "Enter" || type === "Change") {
            userId[id] = nickname;
        }
        if(type === "Enter" || type === "Leave") {
            order.push([type, id]);
        }
    })
    
    return order.map(([type, id]) => `${userId[id]}님이 ${type === "Enter" ? "들어왔습니다." : "나갔습니다."}`);
}