const form = document.querySelector('#formulario');

form.addEventListener('submit', (event) => {
   event.preventDefault();

   const peso = Number(document.querySelector('#peso').value);
   const altura = Number(document.querySelector('#altura').value);

   if (!peso) {
      setResult('Peso Inválido', false);
      return;
   }
   if (!altura) {
      setResult('Altura inválida', false);
   }

   const imc = getImc(peso, altura);
   const nivelImc = getNivelImc(imc);

   const msg = `Seu IMC é ${imc} (${nivelImc})`

   setResult(msg, true);
})

function getImc(peso, altura) {
   const imc = peso / (altura * 2);
   return imc.toFixed(2);
}

function getNivelImc(imc) {
   const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

   if (imc >= 39.9) return nivel[5];
   if (imc >= 34.9) return nivel[4];
   if (imc >= 29.9) return nivel[3];
   if (imc >= 24.9) return nivel[2];
   if (imc >= 18.5) return nivel[1];
   if (imc < 18.5) return nivel[0];
}

function createP() {
   const p = document.createElement('p');
   return p;
}

function setResult(msg, isValid) {
   const res = document.querySelector('#resultado');
   res.innerHTML = '';

   const p = createP();
   p.innerHTML = msg;

   if (isValid) {
      p.classList.add('p-result')
   } else {
      p.classList.add('p-bad-result')
   }

   res.appendChild(p);
}