const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const listEl = document.querySelector('ul');

const itemEl = ingredients.forEach(el => {
  const handlerItemEl = document.createElement('li');
  handlerItemEl.classList.add('item');
  handlerItemEl.textContent = el;
  listEl.append(handlerItemEl);
});
