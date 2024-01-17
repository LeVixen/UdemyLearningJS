const user = {
   name: 'Vincius',
   lastName: 'Martins',
   details: {
      year: 21,
      eyes: 'Green',
   },
}

const { name: userName, lastName } = user; // Desestruturando um objeto e add em uma nova variavel "userNamer"
const { details: { year, eyes } } = user; // Desestruturando um objeto dentro de um objeto 
const fullInfo = userName + lastName + year + eyes;

console.log(fullInfo);