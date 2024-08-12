function solution(board, moves) {
    let basket = [];
    let cnt = 0;
    
    for(let i = 0; i < moves.length; i++) {
        for(let j = 0; j < board.length; j++) {
            let doll = board[j][moves[i] - 1];
            if(doll > 0) {
                if(basket[basket.length - 1] === doll) {
                    basket.pop();
                    cnt += 2;
                } else {
                    basket.push(doll); 
                }
                board[j][moves[i] - 1] = 0;
                break;
            }
        }
    }
    
    return cnt;
}