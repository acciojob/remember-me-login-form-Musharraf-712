//your JS code here. If required.
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const checkbox = document.querySelector('#checkbox')
const existingBtn = document.querySelector('#existing')
const form = document.querySelector('#loginForm')

window.addEventListener('load',()=>{
	const savedUser = localStorage.getItem('username');
	const savedPass = localStorage.getItem('password')

	if(savedUser && savedPass){
		existingBtn.style.display = 'block'
	}else{
		existingBtn.style.display = 'none'
	}
})

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const username= usernameInput.value.trim();
	const password = passwordInput.value.trim();

	alert(`Logged in as ${username}`);

	if(checkbox.checked){
		localStorage.setItem('username',username)
		localStorage.setItem('password',password)
	}else{
		localStorage.removeItem('username');
		localStorage.removeItem('password');
	}

	const savedUser = localStorage.getItem('username');
	if(savedUser){
		existingBtn.style.display = 'block';
	}else{
		existingBtn.style.display = 'none';
	}
})

existingBtn.addEventListener(`click`,() => {
	const savedUser = localStorage.getItem('username')
	if(savedUser) {
		alert(`Logged in as ${savedUser}`);
	}
})









