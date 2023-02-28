const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();

	const formElements = event.currentTarget.elements;
	const email = formElements.email.value;
	const password = formElements.password.value;
	
	if (!email || !password) {
		return alert('Увага! Всі поля повинні бути заповнені');
	}
	console.log ({email, password})		
	form.reset();
}