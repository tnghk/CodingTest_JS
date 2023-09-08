function solution(num_list) {
    let odd = 0;
    let even = 0;

    num_list.forEach((el, idx) => idx % 2 === 0 ? odd += el : even += el);
    return odd >= even ? odd : even ;
}