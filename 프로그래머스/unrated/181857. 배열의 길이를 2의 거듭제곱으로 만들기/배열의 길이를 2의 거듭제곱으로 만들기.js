function solution(arr) {
    let power = 0;
    
    while(true) {
        if(arr.length === Math.pow(2, power)) {
            return arr;
        }
        if(arr.length < Math.pow(2, power)) {
            return [...arr, ...new Array(Math.pow(2, power) - arr.length).fill(0)];
        }
        power++;
    }
}