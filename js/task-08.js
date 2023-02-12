const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === '') {
    return alert('Please fill in all the fields!');
  }
  alert(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
