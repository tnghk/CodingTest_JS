function solution(sizes) {
    let answer = sizes.reduce((size, cur) => {
        let curSize = cur.sort((a, b) => a - b);
        
        if(size.length === 0) {
            return curSize;
        }
        
        size[0] = size[0] < curSize[0] ? curSize[0] : size[0];
        size[1] = size[1] < curSize[1] ? curSize[1] : size[1];

        return size;
    }, []);
    
    return answer[0] * answer[1];
}