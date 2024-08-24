let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n').map(v => v.trim());
let [N, M] = input[0].split(' ').map(Number);
let pokemonToNumber = new Map();
let NumberToPokemon = new Map();
let answer = [];

for(let i = 1; i < N + 1; i++) {
  pokemonToNumber.set(input[i], i);
  NumberToPokemon.set(i, input[i]);
}

for(let i = N + 1; i < input.length; i++) {
  if(isNaN(input[i])) {
    answer.push(pokemonToNumber.get(input[i]));
  } else {
    answer.push(NumberToPokemon.get(+input[i]));
  }
}

console.log(answer.join('\n'));