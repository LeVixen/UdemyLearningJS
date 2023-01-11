
// ? Criando um objecto
const pessoa = {
   nome: 'Vinicis',
   sobrenome: 'Martins',
   idade: 21,
   peso: 73.4,
 };
 
 // ! ----------------------------------------------------------------------- ! /

 // ? Função que cria objetos (factory)
 function criaPessoa(nome, sobrenome, idade, peso){
   return {nome, sobrenome, idade, peso};
 }
 
 const pessoa1 = criaPessoa('luiz', 'Miranda', 21, 66);
 const pessoa2 = criaPessoa('Pedro', 'otávio', 24, 96.7);
 const pessoa3 = criaPessoa('Carlos', 'Luiz', 23, 52);
 
// ! ----------------------------------------------------------------------- ! /
 
 // ? Criando um objecto com um método (função dentro do objeto)
 const pessoaObj = {
   nome: 'Vinicis',
   sobrenome: 'Martins',
   idade: 21,
 
   // ? Método
   fala (){ 
     // * this - Refencia somente ao objeto em questão(pessoaObj)
     console.log(`Minha idade atual é ${this.idade}`);
   },
 
   // ? Método
   incrementaIdade (){
     ++this.idade;
   }
 };
 
 pessoaObj.fala();
 pessoaObj.incrementaIdade();
 pessoaObj.fala();
 pessoaObj.incrementaIdade();
 pessoaObj.fala();
 