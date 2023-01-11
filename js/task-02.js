const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

// start

const ulElement = document.querySelector('#ingredients');

const ingredientsArr = ingredients.map(el => {
  const liElem = document.createElement('li');
  liElem.textContent = el;
  return liElem;
});
// console.log(ingredientsArr);

ulElement.append(...ingredientsArr);
console.log(ulElement);
