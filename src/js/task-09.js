function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
	buttonEl: document.querySelector('.change-color'),
	bodyEl: document.querySelector('body'),
	spanEl: document.querySelector('.color'),
}

refs.buttonEl.addEventListener('click', handleChangBackground);

function handleChangBackground(event) {
	refs.bodyEl.style.background = getRandomHexColor();
	refs.spanEl.textContent = getRandomHexColor();
}