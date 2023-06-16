function factorial(n){
    if (n <= 1){
        return 1;
    }
    else{
        return n*factorial(n-1);    
    }
}

function solution(n) {
    for(let i = 1; i<12; i++){
        if (factorial(i) > n){
            return i-1;
        }
    }
}
