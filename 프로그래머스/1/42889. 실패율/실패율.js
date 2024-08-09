function solution(N, stages) {
    let failRate = {};
    let player = stages.length;
    
    for(let i = 1; i <= N; i++) {
        let failPlayer = stages.filter(v => v === i).length;
        failRate[i] = failPlayer / player;
        player -= failPlayer;
    }
    return Object.keys(failRate).sort((a, b) => failRate[b] - failRate[a]).map(Number);
}