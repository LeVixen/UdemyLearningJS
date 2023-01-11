function subForm() {
   const form = document.querySelector('.form');
   const res = document.querySelector('.res');

   const user = [];

   function recebeEnventoForm(event) {
      event.preventDefault();

      const nome = form.querySelector('.nome').value;
      const sobrenome = form.querySelector('.sobrenome').value;
      const idade = Number(form.querySelector('.idade').value);
      const peso = Number(form.querySelector('.peso').value);

      user.push({
         nome: nome,
         sobrenome: sobrenome,
         idade: idade,
         peso: peso,
      })

      res.innerHTML += `<p>Nome:${nome} ${sobrenome}</br>Idade: ${idade}</br>Peso: ${peso}</p></br>`;
   }

   form.addEventListener('submit', recebeEnventoForm);
}
subForm();
