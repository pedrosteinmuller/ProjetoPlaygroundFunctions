// Desafio 11
function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let i = 0; i < numbers.length; i += 1) {
    let numero = 0;
    let posicao = numbers[i];
    for (let n = 0; n < numbers.length; n += 1) {
      if (posicao === numbers[n]) {
        numero += 1;
      }
    }
    if (posicao < 0 || posicao > 9 || numero >= 3) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
  }
  let novoNumero = ''
  for (let x = 0; x < numbers.length; x += 1) {
    if (x === 0) {
      novoNumero += '(' + numbers[x];
    } else if (x === 1) {
      novoNumero += numbers[x] + ') ';
    } else if (x === 6) {
      novoNumero += numbers[x] + '-';
    } else {
      novoNumero += numbers[x];
    }
  }
  return novoNumero;
}
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
