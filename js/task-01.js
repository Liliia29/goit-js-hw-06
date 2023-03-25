const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

console.log(`В списку ${categoriesItems.length} категорії`);

categoriesItems.forEach(item => {
  const categoryName = item.querySelector('h2').textContent;
  const categoryItemsCount = item.querySelectorAll('li').length;
  console.log(`Категорія: ${categoryName} (кількість елементів: ${categoryItemsCount})`);
});
