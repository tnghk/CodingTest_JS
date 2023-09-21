function solution(arr) {
    let row = arr.length;
    let col = arr[0].length;
    
    if(row > col) {
        return arr.map(v => v.concat(new Array(row - col).fill(0)))
    } else if(row < col) {
        for(let i = 0; i < col - row; i++) {
            arr.push(new Array(col).fill(0));
        }
        return arr;
    } else {
        return arr;
    }
}