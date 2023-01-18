const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
   if (numero === 2) {
      console.log('Pulei o número 2');
      continue; // * continua para o próximo bloco    
   }

   console.log(numero);

   if (numero === 7) {
      console.log('7 encontrado, saindo...');
      break;// * ao chegar aqui o código não executa mais
   }
}

// ! Mesma estrutura utilizando while   

let i = 0;

while (i < numeros.length) {
   let numero = numeros[i];

   if (numero === 2) {
      console.log('Pulei o número 2');
      i++
      continue; // * continua rodando    
   }

   console.log(numero);

   if (numero === 7) {
      console.log('7 encontrado, saindo...');
      i++
      break;// * ao chegar aqui o código não executa mais
   }

   i++
} 