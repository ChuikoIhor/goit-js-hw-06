const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listEl = document.querySelector('ul');

const itemEl = ingredients.map(el => {
  const handlerItemEl = document.createElement('li');
  handlerItemEl.classList.add('item');
  handlerItemEl.textContent = el;
  return handlerItemEl;
});
listEl.append(...itemEl);
