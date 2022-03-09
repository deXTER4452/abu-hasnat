const buttonEl = document.querySelector('#main button');

let counter = 0;

buttonEl.addEventListener('click',() =>{
  counter++;
  document.getElementById('count').textContent = counter;
});