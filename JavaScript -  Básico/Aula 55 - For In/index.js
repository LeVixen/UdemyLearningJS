const frutas = ['Pera', 'Maça', 'Uva'];

// ? 'for in' lê os indices ou chaves do objeto ou array
for (let i in frutas) {
   console.log(frutas[i]);
}

const user = {
   name: 'Vinicius',
   lastName: 'Martins',
   year: 21,
}

for(let i in user){
   console.log(i, user[i])
}