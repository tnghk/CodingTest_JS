function solution(num_list) {
    let odd = num_list.filter(v => v % 2 === 1).join('');
    let even = num_list.filter(v => v % 2 === 0).join('');
    
    return Number(odd) + Number(even);
}