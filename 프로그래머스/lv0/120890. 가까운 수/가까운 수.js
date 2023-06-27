function solution(array, n) {
    let closeNum = 0;
    
    if(array.length === 1){
        closeNum = array[0];
    } else {
        for(let i = 0; i < array.length; i++) {
            if(Math.abs(closeNum - n) > Math.abs(array[i] - n)){
                closeNum = array[i];
            } else if(Math.abs(closeNum - n) === Math.abs(array[i] - n)){
            		closeNum = closeNum < array[i] ? closeNum : array[i];
            }
        }
    }
    
    return closeNum;
}