function solution(hp) {
    let general = Math.floor(hp / 5);
    let soldier = Math.floor((hp - general * 5) / 3);
    let ergate = hp - (general * 5 + soldier * 3);
    
    return general + soldier + ergate;
}