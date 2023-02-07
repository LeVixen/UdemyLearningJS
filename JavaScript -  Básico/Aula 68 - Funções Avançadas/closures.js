function retornaFuncao(nome){
  
   return function () {
      return nome;
   }
}

const funcao = retornaFuncao('Luiz');
console.log(funcao());

// ? Closure e a ahabilidade quea  função tem e acessar o seu escopo lexico.