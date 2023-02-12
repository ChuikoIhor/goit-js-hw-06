let counterValue = 0;
const btnMinusEl = document.querySelector('[data-action="decrement"]');
const btnPlusEl = document.querySelector('[data-action="increment"]');
const spanEl = document.querySelector('#value');

btnMinusEl.addEventListener('click', () => {
  counterValue -= 1;
  spanEl.textContent = counterValue;
});

btnPlusEl.addEventListener('click', () => {
  counterValue += 1;
  spanEl.textContent = counterValue;
});
