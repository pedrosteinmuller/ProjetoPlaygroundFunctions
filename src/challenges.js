// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let areaTrian = (base * height) / 2;
  return areaTrian;
}

// Desafio 3
function splitSentence(nome) {
  let separador = nome.split(' ');
  return separador;
}
// console.log(splitSentence('Ana Laura'));

// Desafio 4
function concatName(nomes) {
  nomes = nomes[nomes.length - 1] + ', ' + nomes[0];
  return nomes;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(meuArray) {
  let maiorNumero = -1;
  let numRep = 0;
  for (let index = 0; index <= meuArray.length; index += 1) {
    if (meuArray[index] > maiorNumero) {
      maiorNumero = meuArray[index];
    }
  }
  for (let index = 0; index < meuArray.length; index += 1) {
    if (meuArray[index] === maiorNumero) {
      numRep += 1;
    }
  }
  return numRep;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catAPos = Math.abs(mouse - cat1);
  let catBPos = Math.abs(mouse - cat2);
  if (catAPos < catBPos) {
    return 'cat1';
  } else if (catBPos < catAPos) {
    return 'cat2';
  } else if (cat1 === cat2);
  {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(entrada) {
  let resultado = [];
  for (let index = 0; index < entrada.length; index += 1)
  {
    if (entrada[index] % 3 === 0 && entrada[index] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (entrada[index] % 3 === 0) {
      resultado.push('fizz');
    } else if (entrada[index] % 5 === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}

// Desafio 9
function encode(enc) {
  for (let index = 0; index < enc.length; index += 1) {
    enc = enc.replace('a', 1).replace('e', 2).replace('i', 3).replace('o', 4).replace('u', 5)
  }
  return enc;
}

function decode(enc1) {
  for (let index = 0; index < enc1.length; index += 1) {
    enc1 = enc1.replace('1', 'a').replace('2', 'e').replace('3', 'i').replace('4', 'o').replace('5', 'u')
}
return enc1;
}
// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
