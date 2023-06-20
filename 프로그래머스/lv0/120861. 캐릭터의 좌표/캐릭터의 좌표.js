function solution(keyinput, board) {
    let x = 0;
    let y = 0;
    let rangeX = parseInt(board[0] / 2);
    let rangeY = parseInt(board[1] / 2);
    
    for(let i in keyinput) {
        switch(keyinput[i]) {
            case "right":
                if(x === +rangeX) continue;
                else x++;
                break;
            case "left":
                if(x === -rangeX) continue;
                else x--;
                break;
            case "up":
                if(y === +rangeY) continue;
                else y++;
                break;
            case "down":
                if(y === -rangeY) continue;
                else y--;
                break;
        }
    }
    
    return [x, y];
}