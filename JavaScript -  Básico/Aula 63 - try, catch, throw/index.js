try {
   // ? bloco executado quando não há erros.
} catch (error) {
   // ? bloco executado quando há erros.
} finally {
   // ? bloco sempre é executado.
}

function soma(x, y) {
   if (typeof x !== 'number' || typeof y !== 'number') {
      throw Error('x e y precisam ser números');
   }
   return x + y;
}

try {
   console.log(soma(5, 23));
   console.log(soma('5', 2));
} catch (error) {
   console.log('Ocorreu um erro na execução!');
}

try {
   console.log(a);
   console.log('Abri um arquivo');
   console.log('Manipulei o arquivo e gerou um erro');
   console.log('Fechei o arquivo');
} catch (error) {
   console.log('ERROR: Tratando o erro');
} finally {
   console.log('FINALLY: Eu sempre sou executado');
}

function returnDate(data) {
   if (data && !(data instanceof Date)) {
      throw new TypeError('Esperando uma instãncia de Date.');
   }

   if (!data) {
      data = new Date();
   }

   return data.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
   });
}

try {
   const data = new Date();
   const hora = returnDate();
   console.log(hora);

} catch (error) {
   console.log('Error')
} finally {
   console.log('Tenha um bom dia!');
}

function mostraHora() {
   let data = new Date();

   return data.toLocaleTimeString('pt-BR', {
      hour12: true,
   })
}

const timer = setInterval(() => {
   console.log(mostraHora())
}, 1000);

setTimeout(() => {
   clearInterval(timer)
}, 3000);


setTimeout(() => {
   console.log('Olá mundo!')
}, 5000)