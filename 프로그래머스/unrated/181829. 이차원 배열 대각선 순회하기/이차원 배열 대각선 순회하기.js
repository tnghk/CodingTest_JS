function solution(board, k) {
    return board.reduce((acc, cur, i) => {
        cur.forEach((v, j) => {
            if(i + j <= k)  acc += v;
        })
        
        return acc;
    }, 0);
}