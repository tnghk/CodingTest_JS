function solution(emergency) {
    let sortedEmergency = [...emergency].sort((a, b) => b - a);
    let order = [];
    
    for(let n in emergency){
        order.push(sortedEmergency.indexOf(emergency[n]) + 1);
    }
    
    return order;
}