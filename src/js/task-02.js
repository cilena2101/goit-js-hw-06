const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientEl = document.querySelector('#ingredients');

const elements =  ingredients.map(ingredient => {
	const elementChildEl = document.createElement('li');
	elementChildEl.classList.add('item');	
	elementChildEl.textContent = ingredient;
	return elementChildEl;
})

ingredientEl.append(...elements);	




