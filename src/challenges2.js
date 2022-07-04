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
// Desafio 12

function parte1 (lineA, lineB, lineC){
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineC);{
    return false;
}
}

function triangleCheck(lineA, lineB, lineC) {
  parte1 (lineA, lineB, lineC);
  if (lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineC - lineA) || lineC < Math.abs(lineB - lineA)){
    return false;
} 
return true;
}



// Desafio 13
  function hydrate(string) {
    let string2 = 0;
    let copos = string.match(/\d+/g).map(Number);
    for (let index = 0; index < copos.length; index += 1) {
      string2 += copos[index];
    }
    if (string2 === 1) {
      return string2 + ' copo de água'
    }
    if (string2 > 1) {
      return string2 + ' copos de água'
    }
  
  }


module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
