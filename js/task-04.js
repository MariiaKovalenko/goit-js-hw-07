
let counerValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');

const incrementBtn = document.querySelector('[data-action="increment"]');

const valueRef = document.getElementById('value');


decrementBtn.addEventListener('click', () => {
  valueRef.textContent = --counerValue;
});

incrementBtn.addEventListener('click', () => {
  valueRef.textContent = ++counerValue;
});