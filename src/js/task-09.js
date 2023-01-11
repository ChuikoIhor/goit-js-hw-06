function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const body = document.querySelector('body');
const spanColor = document.querySelector('.color');
btnChangeColor.addEventListener('click', handleClick => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  console.log((spanColor.textContent = color));
});
