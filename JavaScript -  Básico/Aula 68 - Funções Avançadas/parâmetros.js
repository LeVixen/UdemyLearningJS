/* 
? As funções definidas com 'function' tem um pârametro que sustenta
? todos os argumentos.
! (arguments) 
* Ou seja, mesmo que a função não tenha um parâmetro e mesmo assim
* eu enviar algum, eu posso acessalos usando este pâramentro. 
*/

function funcao() {
   let total = 0;
   for (let argumentos of arguments) {
      total += argumentos;
   }
   // console.log(total)
}
funcao(1, 2, 3, 4, 5);

// ? função com parâmetro; 
function funcao2(a = 0, b = 2, c = 4) {
   // console.log(a + b + c)
}
funcao2(2, undefined, 20);

// ? Argumentos que sustenta todos os argumentos enviados

function funcao3({ nome, sobrenome, idade }) {
   // console.log(nome, sobrenome, idade);
}
let obj = { nome: 'Vinicius', sobrenome: 'Martins', idade: 21 }
funcao3(obj);
// * também pode ser usado com array 

// ! Outro exemplo:

const conta = (operador, acumulador, ...numeros) => {
   for (let numero of numeros) {
      if (operador === '+') acumulador += numero;
      if (operador === '-') acumulador -= numero;
      if (operador === '/') acumulador /= numero;
      if (operador === '*') acumulador *= numero;
   }
   console.log(acumulador);
}
conta('+', 1, 20, 30, 40, 50);

// ! Outro exemplo:

const conta2 = (...args) => {
   console.log(args);
}
conta2('+', 1, 20, 30, 40, 50);
