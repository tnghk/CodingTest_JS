function solution(s) {
    let arr = s.split('');
    let x = s.length;
    let cnt = 0;
    
    while(x > 0) {
        let stack = [];
        arr.map(v => {
            if(v === '(' || v === '[' || v === '{') {
                stack.push(v);
                return;
            }
            if((v === ')' && stack[stack.length - 1] === '(') 
               || (v === ']' && stack[stack.length - 1] === '[') 
               || (v === '}' && stack[stack.length - 1] === '{')) {
                stack.pop();
            } else {
                stack.push(v);
            }
            
        });
        
        if(stack.length === 0) {
            cnt++;
        }
        arr.push(arr.shift());
        x--;
    }
    
    return cnt;
}