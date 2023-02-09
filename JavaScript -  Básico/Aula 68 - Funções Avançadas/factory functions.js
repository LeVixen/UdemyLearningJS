// ? Factory function - (Função fabrica) 

// * Constructor function - (Função Construtora) 

function createUser(nome, sobrenome, altura, peso) {
   return {
      nome,
      sobrenome,

      // ? quando colocado o get antes da função ela finge ser um atributo
      // ! Getter
      get nomeCompleto() {
         return `${this.nome} ${this.sobrenome}`;
      },

      // ! Setter 
      set nomeCompleto(valor) {
         valor = valor.split(' ');
         this.nome = valor.shift();
         this.sobrenome = valor.join(' ');
      },

      fala(assunto = 'Falando sobre nada') {
         return `${this.nome} está ${assunto}`;
      },

      altura,
      peso,

      /// ! Getter
      get imc() {
         const indice = this.peso / (this.altura ** 2);
         return indice.toFixed(2);
      }
   };
}

const p1 = createUser('Vinicis', 'Martins', 1.8, 73);
const p2 = createUser('Pedro', 'Rocha', 2.1, 134);
const p3 = createUser('Thiago', 'Mapa', 1.6, 92);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);