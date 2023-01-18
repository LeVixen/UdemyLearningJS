const frutas = ['Pera', 'Maça', 'Uva'];

// ? 'for in' lê os indices ou chaves do objeto ou array
for (let i in frutas) {
   console.log(frutas[i]);
}

console.log('------------------')

const user = {
   name: 'Vinicius',
   lastName: 'Martins',
   year: 21,
}

// ? 'for of' pega os indices do array ou obejto
for (let i in user) {
   console.log(i, user[i])
}

console.log('------------------')

const names = ['Vinicius', 'Carlos', 'Vitor']

// ? 'for of' pega os valores do array ou objeto
for (let i of names) {
   console.log(i)
}


console.log('------------------')
// ? 'forEach' 
names.forEach(function (valor, indice) {
   console.log(valor, indice)
})


// * 'for in' - retorna o índeci ou chave (string, obejtos, array)
// * 'for of' -  retorna o valor em si (iteráveis, arryas ou string)