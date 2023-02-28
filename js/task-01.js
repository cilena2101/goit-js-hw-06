const categorieEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categorieEl.length}`);
categorieEl.forEach(element => {
	console.log(`Category: ${element.querySelector('h2').textContent}`);
	console.log(`Elements:`+ ' ' + element.querySelector('ul').children.length);	
});