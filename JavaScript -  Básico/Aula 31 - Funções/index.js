
function sayHi(nome){
   return `Hi! ${nome}.`;
 }
 
 const variavel = sayHi('Vinícius');
 console.log(variavel);
 
 // ! ---------------------------------------------------------- ! //
 // ? Função que recebe valores e retorna o resultado
 function soma(n1, n2){ 
   return n1 + n2
 }
 
 console.log(soma(2,6))
 
 // ! ---------------------------------------------------------- ! //
 // ?  Função em  uma variavel
 const raiz = function (n) { 
   return n ** 0.5
 }; 
 
 console.log(raiz(9))
 console.log(raiz(16))
 console.log(raiz(25))
 
 // ! ---------------------------------------------------------- ! //
 
 // ? Arrow Function
 const raiz2 = (n) => {return n ** 0.5}; 
 
 console.log(raiz2(9))
 console.log(raiz2(16))
 console.log(raiz2(25))