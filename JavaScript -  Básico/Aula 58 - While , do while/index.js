let i = 0;
while(i <= 10){
   console.log(i);
   i++;
}

// ? funçãoq ue gera numeros aleátorios dentro de um range específico;
function random(min, max) {
   const r = Math.random() * (max - min) + min;
   return Math.floor(r);
}

const min = 1;
const max = 30;
let rand = random(min, max);

// * Enquanto rand for diferente de 10, execute o bloco de código;
while (rand !== 10) {
   rand = random(min, max);
   console.log(rand);
}

// * Execute o bloco de código e depois checa a condição.
do {
   rand = random(min, max);
   console.log(rand);
} while (rand !== 10);