const input = document.querySelector("#font-size-control");
const textEl = document.querySelector('#text');
console.log(input);

input.addEventListener('input', changeSizeText);

function changeSizeText(event) {
		textEl.style.fontSize = event.currentTarget.value + 'px';	
	}