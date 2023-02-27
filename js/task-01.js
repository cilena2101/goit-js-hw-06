const categorieEl = document.querySelector('#categories');
const categoriesChildrenEl = categorieEl.children;
console.log(`Number of categories: ${categoriesChildrenEl.length}`);
for (let categorie of categoriesChildrenEl) {
	console.log(`Category: ${categorie.querySelector('h2').textContent}`);
	console.log(categorie.querySelector('ul').children.length);	
}