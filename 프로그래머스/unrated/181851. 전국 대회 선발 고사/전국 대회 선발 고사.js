function solution(rank, attendance) {
    const [ a, b, c ] = rank.reduce((arr, cur, i) => {
        if(attendance[i])   //rank 각 원소의 대회 참여가 가능할 경우
            arr[cur - 1] = i;
        return arr;
    }, []).filter(v => v >= 0).slice(0, 3);
    
    return 10000 * a + 100 * b + c;
}


