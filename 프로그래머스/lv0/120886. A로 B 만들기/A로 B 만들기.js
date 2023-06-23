function solution(before, after) {
    let beforeSort = [...before].sort().join("");
    let afterSort = [...after].sort().join("");
    
    return beforeSort === afterSort ? 1 : 0;
}