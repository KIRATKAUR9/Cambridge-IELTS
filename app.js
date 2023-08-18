
var loginForm = document.getElementById('login-form');
var registerForm = document.getElementById('register-form');
var loginLink = document.getElementById('login-link');
var signupLink = document.getElementById('signup-link');

// Show the login form and hide the register form when the "Sign In" link is clicked
loginLink.addEventListener('click', function(e) {
	e.preventDefault();
	loginForm.style.display = 'block';
	registerForm.style.display = 'none';
});

// Show the register form and hide the login form when the "Create an account" link is clicked
signupLink.addEventListener('click', function(e) {
	e.preventDefault();
	loginForm.style.display = 'none';
	registerForm.style.display = 'block';
});

// Handle the login form submission
loginForm.addEventListener('submit', function(e) {
	e.preventDefault();
	var username = loginForm.username.value;
	var password = loginForm.password.value;
	if (username === '' || password === '') {
		alert('Please enter a username and password');
	} else {
		// TODO: Perform login validation here
		alert('Logged in successfully!');
	}
});

// Handle the register form submission
registerForm.addEventListener('submit', function(e) {
	e.preventDefault();
	var username = registerForm.username.value;
	var password = registerForm.password.value;
	var email = registerForm.email.value;
	if (username === '' || password === '') {
		alert('Please enter a username and password');
	} else {
		// TODO: Perform registration validation here
		alert('Registered successfully!');
	}
});
