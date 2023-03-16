<?php
  $firstName = $lastName = $email = $confirmEmail = $password = $confirmPassword = $username = $userRole = '';
  $errors = [];

  if (isset($_POST['submit'])) {
    $firstName = trim($_POST['first-name']);
    $lastName = trim($_POST['last-name']);
    $email = trim($_POST['email']);
    $confirmEmail = trim($_POST['confirm-email']);
    $password = trim($_POST['password']);
    $confirmPassword = trim($_POST['confirm-password']);
    $username = trim($_POST['username']);
    $userRole = trim($_POST['user-role']);

    // validate first name
    if (empty($firstName)) {
      $errors[] = 'First name is required';
    } elseif (!preg_match('/^[a-zA-Z\s]+$/', $firstName)) {
      $errors[] = 'First name must only contain letters and spaces';
    }

    // validate last name
    if (empty($lastName)) {
      $errors[] = 'Last name is required';
    } elseif (!preg_match('/^[a-zA-Z\s]+$/', $lastName)) {
      $errors[] = 'Last name must only contain letters and spaces';
    }

    // validate email
    if (empty($email)) {
      $errors[] = 'Email address is required';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $errors[] = 'Invalid email address';
    }

    // validate confirm email
    if (empty($confirmEmail)) {
      $errors[] = 'Confirm email address is required';
    } elseif ($email !== $confirmEmail) {
      $errors[] = 'Email addresses do not match';
    }

    // validate password
    if (empty($password)) {
      $errors[] = 'Password is required';
    } elseif (strlen($password) < 8) {
      $errors[] = 'Password must be at least 8 characters';
    } elseif (!preg_match('/[A-Z]/', $password) || !preg_match('/[a-z]/', $password) || !preg_match('/[0-9]/', $password) || !preg_match('/[!@#$%^&*()\-_=+{}\[\]|\\:;"\'<>,.?`~]/', $password)) {
      $errors[] = 'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character';
    }

    // validate confirm password
    if (empty($confirmPassword)) {
      $errors[] = 'Confirm password is required';
    } elseif ($password !== $confirmPassword) {
      $errors[] = 'Passwords do not match';
    }

    // validate username
    if (empty($username)) {
      $errors[] = 'Username is required';
    } elseif (strlen($username) < 4) {
      $errors[] = 'Username must be at least 4 characters';
    } elseif (!preg_match('/^[a-zA-Z0-9_]+$/', $username)) {
      $errors[] = 'Username must only contain letters, numbers, and underscores';
    }

    // validate user role
    if (empty($userRole)) {
      $errors[] = 'User role is required';
    }

    if (empty($errors)) {
      // registration form is valid, do something with the data
      // for example, insert the data into a database or send an email
      // and then redirect the user to a success page
      header('Location: success.php');
      exit;
    }
  }
?>
