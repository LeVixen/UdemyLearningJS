// ? a função já retorna se a condição é true ou false.

// const ePaisagem = (altura, largura) => altura > largura;
// console.log(ePaisagem(1080, 1920));


function calc(numero) {
   if (typeof (numero) !== "number") return 'Não é um número válido!';
   if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
   if (numero % 5 === 0) return 'Buzz';
   if (numero % 3 === 0) return 'Fizz';
   return numero;
}

for (let i = 0; i <= 100; i++) {
   console.log(i, calc(i))
}

// test git hub definitivo 

 