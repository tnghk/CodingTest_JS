function solution(polynomial) {
    let arr = polynomial.split(" + ");
    let linear = 0;
    let constant = 0;
    
    for(let i in arr) {
        if(arr[i].includes("x")) {
            let coefficient = 1;    
            
            if(arr[i].replace("x", "")) {
                coefficient = +arr[i].replace("x", "");
            }
            
            linear += coefficient;
        } else {
            constant += +arr[i];
        }
    }
    
    if(constant !== 0) {
        if(linear === 0) {
            return constant + "";
        } else if(linear === 1) {
            return "x + " + constant;
        } else {
            return linear + "x + " + constant;
        }
    } else {
        if(linear === 0) {
            return 0;
        } else if(linear === 1) {
            return "x";
        } else {
            return linear + "x";
        }
    }
}