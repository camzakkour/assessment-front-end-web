console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}

const compliments = () => {
	// let printcomliment= document.querySelector('ul')
	alert(`You're pretty`)
}

document.querySelector('img').addEventListener('mouseover', compliments)


let form = document.querySelector('form#contact');
form.addEventListener('submit', handleSubmit);