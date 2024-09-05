function solution(nums) {
    let num = nums.length / 2;
    let kind = new Set(nums);
    
    return kind.size <= num ? kind.size : num;
}