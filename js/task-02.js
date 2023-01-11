const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ulElement = document.querySelector('#ingredients');

const ingredientsArr = ingredients.map(el => {
  const liElem = document.createElement('li');
  liElem.textContent = el;
  return liElem;
});

ulElement.append(...ingredientsArr);
console.log(ulElement);
