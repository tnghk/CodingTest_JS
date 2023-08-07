function solution(n)
{
    let answer = [...n.toString()].reduce((acc, cur) => acc + Number(cur), 0);

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}