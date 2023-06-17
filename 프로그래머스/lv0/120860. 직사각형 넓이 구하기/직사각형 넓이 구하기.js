function solution(dots) {
    let width = Math.max(...dots.map(v => v[0])) - Math.min(...dots.map(v => v[0]));
    let height = Math.max(...dots.map(v => v[1])) - Math.min(...dots.map(v => v[1]));
    
    return width * height;
}