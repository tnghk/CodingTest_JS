function solution(myString) {
    return [...myString.toLowerCase()].map(v => v === "a" ? "A" : v).join('');
}