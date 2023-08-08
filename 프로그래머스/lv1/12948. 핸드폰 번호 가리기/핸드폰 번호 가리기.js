function solution(phone_number) {
    var answer = '';
    return "*".repeat(phone_number.length - 4) + phone_number.substring(phone_number.length - 4);
}