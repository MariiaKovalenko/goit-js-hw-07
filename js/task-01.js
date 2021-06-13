const listEl = document.querySelectorAll('#categories>li');
console.log(`В списке ${listEl.length} категории`);
const listTitle = document.querySelector('h2').textContent;
console.log(`Категория: ${listTitle}`);
const listName = document.querySelector('.item').lastElementChild.children;
console.log(`Количество елементов: ${listName.length}`);  