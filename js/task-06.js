const input = document.querySelector('#validation-input');
const dataLength = Number(input.getAttribute('data-length'));

input.addEventListener('blur', event => {
  const text = event.target.value.length;

  if (text === dataLength) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});
