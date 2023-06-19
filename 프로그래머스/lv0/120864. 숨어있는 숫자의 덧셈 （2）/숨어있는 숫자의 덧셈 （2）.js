function solution(my_string) {
    let number = my_string.replace(/[^0-9]/g, " ").split(" ").filter(num => num !== "");

    return number.reduce((acc, cur) => acc + Number(cur), 0);
}