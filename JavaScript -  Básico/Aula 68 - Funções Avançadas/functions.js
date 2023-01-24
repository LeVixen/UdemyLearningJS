// ? Declaração de função (Function hoinsting).
// * Ao executar o js eleva essa função para o inicio do arquivo.

function helloWorld() {
   console.log("Hello World!")
}
helloWorld();


// ? First-class objects (Obejetos de primeira classe).
// ! Function expression
// * Tratar as funçoes como dados

const souUmDado = function () {
   console.log('Sou um dado');
}

function executaFuncao(funcao) {
   console.log('Executando a função abaixo:');
   funcao(souUmDado);
}
executaFuncao(souUmDado);


// ? Arrow function 

const funcArrow = () => {
   console.log('Sou uma arrow function');
}
funcArrow();


// ? Dentro de um obejto 

const obj = {
   falar() {
      console.log('Estou falando...')
   }
}
obj.falar();