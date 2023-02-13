function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
const btnCreatEl = inputEl.nextElementSibling;
const btnDestroyEl = btnCreatEl.nextElementSibling;
const boxColectionEl = document.querySelector('#boxes');

const creatNumberOfBoxes = () => {
  return +inputEl.value;
};

const creatBoxEl = btnCreatEl.addEventListener('click', event => {
  boxColectionEl.innerHTML = '';
  const inputValueEl = creatNumberOfBoxes();
  let boxSize = 20;
  for (let i = 0; i < inputValueEl; i += 1) {
    const randomColor = getRandomHexColor();
    const box = document.createElement('div');
    boxSize += 10;
    box.style.cssText = `width: ${boxSize}px; height: ${boxSize}px; background: ${randomColor}; margin-top: 10px`;
    boxColectionEl.append(box);
  }

  boxColectionEl.style.cssText = `display: flex; flex-wrap: wrap; gap: 10px`;
});

btnDestroyEl.addEventListener('click', () => {
  boxColectionEl.innerHTML = '';
  inputEl.value = '';
});
