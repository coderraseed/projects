const form = document.querySelector('#registration-form');
const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const confirmEmailInput = document.querySelector('#confirm-email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const usernameInput = document.querySelector('#username');
const userRoleInput = document.querySelector('#user-role');

const errorsContainer = document.querySelector('#errors');

form.addEventListener('submit', function (event)) {
  // Clear any previous errors
  errorsContainer.innerHTML = '';

  // Initialize an array to store any errors
  let errors = [];

  // Validate first name
  if (firstNameInput.value.trim() === '') {
    errors.push('First name is required');
  } else if (!/^[A-Za-z\s]+$/.test(firstNameInput.value.trim())) {
    errors.push('First name can only contain letters and spaces');
  }

  // Validate last name
  if (lastNameInput.value.trim() === '') {
    errors.push('Last name is required');
  } else if (!/^[A-Za-z\s]+$/.test(lastNameInput.value.trim())) {
    errors.push('Last name can only contain letters and spaces');
  }

  // Validate email
  if (emailInput.value.trim() === '') {
    errors.push('Email address is required');
  } else if (!isValidEmail(emailInput.value.trim())) {
    errors.push('Invalid email address');
  }

  // Validate confirm email
  if (confirmEmailInput.value.trim() === '') {
    errors.push('Confirm email address is required');
  } else if (confirmEmailInput.value.trim() !== emailInput.value.trim()) {
    errors.push('Email addresses do not match');
  }

  // Validate password
  if (passwordInput.value.trim() === '') {
    errors.push('Password is required');
  } else if (passwordInput.value.trim().length < 8) {
    errors.push('Password must be at least 8 characters');
  } else if (!/[A-Z]/.test(passwordInput.value.trim())) {
    errors.push('Password must contain at least one uppercase letter');
  } else if (!/[a-z]/.test(passwordInput.value.trim())) {
    errors.push('Password must contain at least one lowercase letter');
  } else if (!/\d/.test(passwordInput.value.trim())) {
    errors.push('Password must contain at least one digit');
  } else if (!/[^A-Za-z0-9]/.test(passwordInput.value.trim())) {
    errors.push('Password must contain at least one special character');
  }


  // Validate confirm password
  if (confirmPasswordInput.value.trim() === '') {
    errors.push('Confirm password is required');
  } else if (confirmPasswordInput.value.trim() !== passwordInput.value.trim()) {
    errors.push('Passwords do not match');
  }

  // Validate username
  if (usernameInput.value.trim() === '') {
    errors.push('Username is required');
  } else if (usernameInput.value.trim().length < 4) {
    errors.push('Username must be at least 4 characters');
  } else if (!/^[A-Za-z0-9_]+$/.test(usernameInput.value.trim())) {
    errors.push('Username can only contain letters, numbers, and underscores');
  }

  // Validate user role
  if (userRoleInput.value.trim() === '') {
    errors.push('User role is required');
  }

  // If there are any errors, prevent the form from submitting and display the errors
  if (errors.length > 0) {
    event.preventDefault();
    for (let i = 0; i < errors.length; i++) {
      const error = document.createElement('div');
      error.classList.add('error');
      error.textContent = errors[i];
      errorContainer.appendChild(error);
    }
  }
}
