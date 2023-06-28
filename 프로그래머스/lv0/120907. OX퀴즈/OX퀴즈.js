function solution(quiz) {
    let result = [];
    
    for(i of quiz){
        let arr = i.split(" ");
        let z = arr.includes("+") ? Number(arr[0]) + Number(arr[2]) : Number(arr[0] - Number(arr[2]))
        result.push(z === Number(arr[arr.length - 1]) ? "O" : "X");
    }
    
    return result;
}