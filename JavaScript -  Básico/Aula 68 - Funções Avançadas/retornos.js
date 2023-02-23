// ? return - retorna uma valor / termina a função

function soma(a, b) {
   return a + b;
}
console.log(soma(2, 5));

function soma2(a, b) {
   console.log(a + b);
}
soma2(3, 2);

// document.addEventListener('click', function () {
//    document.body.style.backgroundColor = 'red';
// })

// ? Fuction create object
function createUser(nome, sobrenome) {
   return { nome, sobrenome };
}

const user1 = createUser('Luiz', 'Otávio');
const user2 = createUser('Vinicius', 'Martins');
console.log(typeof user1);
console.log(typeof user2);


function falaFrase(comeco) {
   function falaResto(resto) {
      return comeco + ' ' + resto;
   }
   return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto);

// ----------------------------------------------- //

function criaMultiplicador(multiplicador){
   return function multiplica(n) {
      return n * multiplicador;
   };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);

console.log(duplica(2));
console.log(triplica(10));

// comment
// asdasd