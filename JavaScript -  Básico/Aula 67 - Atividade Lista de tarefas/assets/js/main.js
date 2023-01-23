const submitBtn = document.querySelector('#submit');
const taskForm = document.querySelector('.taskForm');
const task = document.querySelector('#taskText');
const listTask = document.querySelector('.res')

let contador = 0;

taskForm.addEventListener('submit', (event) => {
   event.preventDefault();
});

submitBtn.addEventListener('click', addTask);

function addTask() {

   let taskValue = task.value;

   if (taskValue != 0) {
      contador++;

      let newItem = `<li id="${contador}">${taskValue}<button onclick="delet(${contador})">Apagar</button></li>
      `;

      listTask.innerHTML += newItem;

      taskValue = ' '
   }
}

function delet(contador){
   document.getElementById(contador).remove();
   alert(`Tarefa N: ${contador} foi removida`)
}