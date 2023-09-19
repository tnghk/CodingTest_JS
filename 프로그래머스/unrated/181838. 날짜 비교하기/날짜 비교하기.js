function solution(date1, date2) {
    //날짜가 같거나 date1의 연도가 더 앞서는 경우
    if(date1.every((v, i) => date2[i] === v) || date1[0] > date2[0]) {  
        return 0;
    } else {    //date1과 date2의 연도가 같거나 date2의 연도가 더 앞서는 경우
        if(date1[1] < date2[1] || (date1[1] === date2[1] && date1[2] < date2[2])) {
            return 1;
        } else {
            return 0;
        }
    }
}