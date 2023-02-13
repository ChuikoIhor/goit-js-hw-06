const totalCategoryEl = document.querySelectorAll('.item');
console.log('Number of categories:', totalCategoryEl.length);

totalCategoryEl.forEach(el => {
  console.log('Category:', el.firstElementChild.textContent);
  console.log('Elements:', el.lastElementChild.children.length);
});
