const totalCategories = document.querySelectorAll('.item');
console.log('Number of categories:', totalCategories.length);

totalCategories.forEach(i => {
  const title = i.querySelector('h2').textContent;
  console.log(`Category: ${title}`);
  const element = i.querySelectorAll('li').length;
  console.log(`Elements: ${element}`);
});

// const firstCategory = document.querySelector('li>h2').textContent;
// console.log(`Category: ${firstCategory}`);

// const secondCategory = totalCategories[1].querySelector('li>h2').textContent;
// console.log(`Category: ${secondCategory}`);

// const thirdCategory = totalCategories[2].querySelector('li>h2').textContent;
// console.log(`Category: ${thirdCategory}`);
