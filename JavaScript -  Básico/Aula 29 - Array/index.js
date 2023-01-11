
// todo Indices: 0      1       2             
let alunos = ['Luiz','Pedro','Maria'];


console.log(alunos);

console.log(alunos[0]); // * Luiz
console.log(alunos[1]); // * Pedro
console.log(alunos[2]); // * Maria
console.log(alunos.length); // * 3 

//!--------------------------------------------------------------!//

alunos.push('Luiza');    // ? Adiciona no fim do array
alunos.unshift('Fábio'); // ? Adicona no inicio do array

console.log(alunos);

//!--------------------------------------------------------------!//

let removidoF = alunos.pop(); // * Remove o ultimo indice do array
let removidoI = alunos.shift();
 // * Remove o primeiro indice do array
console.log(alunos);
console.log(removidoF);
console.log(removidoI);

//!--------------------------------------------------------------!// 

console.log(typeof alunos)
console.log(alunos.slice(0,3));

//!--------------------------------------------------------------!// 

console.log(alunos instanceof Array); // ? Verifica se é um array. true

alunos = 123; // * Mudei o tipo da variavel de array para number
console.log(alunos instanceof Array); // * false


//!--------------------------------------------------------------!// 


