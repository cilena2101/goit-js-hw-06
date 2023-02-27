const refs = {
	buttonDecrementEl: document.querySelector('[data-action="decrement"]'),
	buttonIncrementEl: document.querySelector('[data-action="increment"]'),
	spanEl: document.querySelector("#value"),
}

refs.buttonDecrementEl.addEventListener('click', () => {
	refs.spanEl.textContent -=1;
});

refs.buttonIncrementEl.addEventListener('click', () => {
	let boxElement = parseInt(refs.spanEl.textContent);
	refs.spanEl.textContent = boxElement + 1;
});

