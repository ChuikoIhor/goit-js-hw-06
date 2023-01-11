let counterValue = 0;
const btnMinus = document.querySelector('button[data-action="decrement"]');
const btnPlus = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector('#value');
btnMinus.addEventListener('click', () => {
  counterValue -= 1;
  counter.textContent = counterValue;
});

btnPlus.addEventListener('click', () => {
  counterValue += 1;
  counter.textContent = counterValue;
});
