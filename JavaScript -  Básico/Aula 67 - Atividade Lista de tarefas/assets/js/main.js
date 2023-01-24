const task = document.querySelector('#taskText');
const listTask = document.querySelector('.res')
const submitBtn = document.querySelector('#submit');

let contador = 0;

submitBtn.addEventListener('click', addTask);

function addTask(event) {
   event.preventDefault();

   let taskValue = task.value;

   contador++;

   if (taskValue != 0) {
      let newItem = `<li id="${contador}">${taskValue}<button onclick="removeTask(${contador})">Apagar</button></li>`;

      listTask.innerHTML += newItem;

      window.localStorage.setItem(contador, newItem)
   }
};

function loadTask() {
   let storage = window.localStorage;
   for (let i = 1; i <= storage.length; i++) {
      let itens = storage.getItem(i);
      if (window.localStorage.getItem(i) !== null){
         console.log(itens);
         listTask.innerHTML += itens;
      }
   }
};

function removeTask(id) {
   document.getElementById(id).remove();
   window.localStorage.removeItem(id);
};
