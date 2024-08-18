function solution(genres, plays) {
    let totalObj = {};
    let playsObj = {};
    let answer = [];
    
    genres.forEach((genre, idx) => {
        if(!totalObj[genre]) {
            totalObj[genre] = plays[idx];
        } else {
            totalObj[genre] += plays[idx];
        }
        
        if(!playsObj[genre]) {
            playsObj[genre] = [[idx, plays[idx]]];
        } else {
            playsObj[genre].push([idx, plays[idx]]);
        }
    })
    
    let sortedGenres = Object.entries(totalObj).sort((a, b) => b[1] - a[1]).map(v => v[0]);
    
    for(let genre of sortedGenres) {
        playsObj[genre].sort((a, b) => b[1] - a[1]);
        answer.push(playsObj[genre][0][0]);
        
        if(playsObj[genre][1]) {
        answer.push(playsObj[genre][1][0]);
        }
    }
    
    return answer
}