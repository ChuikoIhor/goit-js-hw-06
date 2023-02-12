const totalCategoryEl = document.querySelectorAll('.item');
console.log('Number of categories:', totalCategoryEl.length);

totalCategoryEl.forEach(el => {
  console.log('Category:', el.querySelector('h2').textContent);
  console.log('Elements:', el.querySelectorAll('li').length);
});
