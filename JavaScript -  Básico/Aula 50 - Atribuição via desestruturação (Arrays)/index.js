// ...res, ...sprad operador com contexto
//
//                   0          1           2
//                0  1  2    0  1  2     0  1  2   
const numeros = [[1, 2, 3], [4, 5, 6,], [7, 8, 9]];

const [,[,,seis]] = numeros; // outra maneira de desestruturar o array

const [lista1, ...resto] = numeros; // Desestruturando o array e armazendo o resto dos valores na variavel'resto' usando o '...'

const [lista1, lista2, lista3] = numeros; // Desestruturando o array em outras variaveis

console.log(lista1[2]) // valor no indice 2 da lista1


