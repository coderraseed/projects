const form = document.getElementById("registration-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const confirmEmail = document.getElementById("confirm-email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const username = document.getElementById("username");
const userRole = document.getElementById("user-role");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent form from submitting by default

    let errors = [];

    // check first name field
    if (firstName.value.trim() === "") {
        errors.push("First name is required");
    }

    // check last name field
    if (lastName.value.trim() === "") {
        errors.push("Last name is required");
    }

    // check email field
    if (email.value.trim() === "") {
        errors.push("Email address is required");
    } else if (!isValidEmail(email.value.trim())) {
        errors.push("Invalid email address");
    }

    // check confirm email field
    if (confirmEmail.value.trim() === "") {
        errors.push("Confirm email address is required");
    } else if (email.value.trim() !== confirmEmail.value.trim()) {
        errors.push("Email addresses do not match");
    }

    // check password field
    if (password.value.trim() === "") {
        errors.push("Password is required");
    } else if (password.value.trim().length < 6) {
        errors.push("Password must be at least 6 characters");
    }

    // check confirm password field
    if (confirmPassword.value.trim() === "") {
        errors.push("Confirm password is required");
    } else if (password.value.trim() !== confirmPassword.value.trim()) {
        errors.push("Passwords do not match");
    }

    // check username field
    if (username.value.trim() === "") {
        errors.push("Username is required");
    } else if (username.value.trim().length < 4) {
        errors.push("Username must be at least 4 characters");
    }

    // check user role field
    if (userRole.value.trim() === "") {
        errors.push("User role is required");
    }

    if (errors.length > 0) {
        alert(errors.join("\n"));
    } else {
        form.submit();
    }
});

function isValidEmail(email) {
    // regular expression for validating email address format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
