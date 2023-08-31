function solution(my_string, queries) {
    let str = my_string.split('');
    queries.forEach(query => {
        let arr = str.slice(query[0], query[1] + 1).reverse();
        str.splice(query[0], arr.length, ...arr);
    });
    
    return str.join('');
}