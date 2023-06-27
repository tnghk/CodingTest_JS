function solution(numbers) {
    let num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    for(let i in num) {
        if(numbers.includes(num[i])){
            numbers = numbers.replaceAll(num[i], i);
        }
    }
    
    return Number(numbers);
}