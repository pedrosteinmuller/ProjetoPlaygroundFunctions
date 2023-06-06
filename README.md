# Projeto Playground Functions 🎡🛝🎢

Consiste na criação de funções seguindos os requisitos especificados.

* Desenvolvida utilizando JavaScript.

### Descrição das funções criadas: 

<br>

`compareTrue`: função que recebe dois valores booleanos e retorna `true` apenas se ambos os valores forem verdadeiros.

<br>

`calcArea`: função que recebe a `base` e `altura` de um triângulo e retorna a área.

<br>

`splitSentence`: função que recebe uma `string` e retornará uma `array` de `strings` separadas por cada espaço na string original.

<br>

`concatName`: função que recebe uma `array` de `strings`, retorne uma `string` com o formato `ÚLTIMO ITEM, PRIMEIRO ITEM`, independente do tamanho da array.

<br>

`footballPoints`: função que receba o número de vitórias e o número de empates e retorna a quantidade de pontos que o time marcou em um campeonato, considerando que cada vitória vale 3 pontos e cada empate vale 1 ponto.

<br>

`highestCount`: função que recebe uma `array` de números e retorna a quantidade de vezes que o maior deles se repete.

<br>

`catAndMouse`: função que recebe a posição do `mouse`, `cat1` e `cat2`, nessa ordem, calcula as distâncias entre o rato e cada um dos gatos, em seguida, retorna qual dos felinos irá alcançar o rato primeiro.

<br>

`fizzBuzz`: função que recebe um `array` de números e retorne uma array da substituindo o número por: `"fizz"` se for divisível apenas por 3; `"buzz"` se for divisível apenas por 5; `"fizzBuzz"` se for divisível por 3 e 5 e "bug!" se não entrar em nenhuma das condições anteriores.

<br>

`encode`: função que ao receber uma string como parâmetro, deverá trocar todas as vogais minúsculas por números, de acordo com o formato a seguir:

```
a => 1 
e => 2 
i => 3 
o => 4 
u => 5
```

<br>

`decode`: esta função realiza o oposto da função `encode`, recebe os números presentes nas `string` e substituí pela vogal correspondente.

<br>

`techList`: função que recebe um `array` de nomes de tecnologias a ser aprendidas e um nome (formato de `string`) e retorna um `array` de objetos, sendo que cada elemento e composto por uma tecnologia na chave `tech` e nome informado na chave `name`.

```
{
  tech: "NomeTech",
  name: name
}
```

<br>

`generatePhoneNumber`: função que recebe um `array` com 11 números e retorne um número de telefone, respeitando parênteses, traços e espaços; seguindo as condições: (1) se a função receber um `array` com tamanho diferente de 11, a mesma deve retornar `"Array com tamanho incorreto."` ou (2) caso algum dos números da `array` seja menor que 0, maior que 9 ou se repita 3 vezes ou mais, deverá retornar a string `"não é possível gerar um número de telefone com esses valores"`.

<br>

`triangleCheck`: função que deverá receber as três linhas que compõem um suposto triângulo e retornar se é possível formar um triângulo com os valores apresentados de cada linha.

<br>

`hydrate`: função que recebe uma string, e retorne a sugestão de quantos copos de água você deve beber, segundo o exemplo:

```
String recebida:
  "1 cachaça, 5 cervejas e 1 copo de vinho"
String retornada:
  "7 copos de água"
```
