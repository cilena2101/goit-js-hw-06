const inputNameEl = document.querySelector('#name-input');
const inputOutputEl = document.querySelector('#name-output');

inputNameEl.addEventListener('input', () => {
	inputOutputEl.textContent = inputNameEl.value ? inputNameEl.value : "Anonymous";
});