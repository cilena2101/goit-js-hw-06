function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
	input: document.querySelector('#controls > input'),
	createButton: document.querySelector('[data-create]'),
	boxes: document.querySelector('#boxes'),
	cleanerButton: document.querySelector('[data-destroy]'),
}

refs.createButton.addEventListener('click', getAmount);

function getAmount() {
	createBoxes(refs.input.value);
}

function createBoxes(amount) {
	let width = 20;
	let height = 20;
	for (let i = 1; i <= amount; i += 1)	{
		let box = document.createElement('div');
		box.style.cssText = `width: ${width += 10}px; height: ${height += 10}px; background-color: ${getRandomHexColor()}`;
		refs.boxes.append(box);
	}
}

refs.cleanerButton.addEventListener('click', cleanerBoxes);
function cleanerBoxes() {
	refs.boxes.innerHTML = '';
}