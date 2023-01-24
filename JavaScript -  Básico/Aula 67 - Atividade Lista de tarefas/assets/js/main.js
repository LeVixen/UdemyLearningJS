const task = document.querySelector('#input-new-task');
const listTask = document.querySelector('.tarefas')
const submitBtn = document.querySelector('#submitTask');

let contador = 0;

submitBtn.addEventListener('click', addTask);

function addTask() {
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
   for (let i = 0; i <= storage.length; i++) {
      let itens = storage.getItem(i);
      if (itens !== null) {
         console.log(itens);
         listTask.innerHTML += itens;
      }
   }
};

function removeTask(id) {
   document.getElementById(id).remove();
   window.localStorage.removeItem(id)
};
