const iniciar = document.querySelector('.iniciar').onclick = (start);
const pausar = document.querySelector('.pausar').onclick = (pause);
const zerar = document.querySelector('.zerar').onclick = (stop);
const clock = document.querySelector('.clock');

let min = 0;
let sec = 0;
let hrs = 0;

let interval;

function twoDigits(digit) {
   if (digit < 10) {
      return '0' + digit;
   } else {
      return digit;
   }
}

function start() {
   watch()
   clearInterval(interval);
   interval = setInterval(watch, 1000);
   clock.style.color = 'black';
}

function pause() {
   clearInterval(interval);
   clock.style.color = 'red';
}

function stop() {
   clearInterval(interval);
   min = 0;
   sec = 0;
   hrs = 0;
   clock.innerText = '00:00:00';
}

function watch() {
   sec++;
   if (sec == 60) {
      min++;
      sec = 0;
      if (min == 60) {
         hrs++;
         min = 0;
      }
   }

   clock.innerText = twoDigits(hrs) + ":" + twoDigits(min) + ":" + twoDigits(sec);
};