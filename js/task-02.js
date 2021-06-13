const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ].map(ingredient => {
      const li = document.createElement('li');
      li.textContent = ingredient;
      return li;
  });

  console.log(ingredients);

  document.body.append(...ingredients);
