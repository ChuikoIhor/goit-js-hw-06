// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

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

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
