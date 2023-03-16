<?php

$firstName = $lastName = $email = $confirmEmail = $password = $confirmPassword = $username = $userRole = '';
$errors    = [];

if ( isset( $_POST['submit'] ) ) {
    $firstName       = trim( $_POST['first-name'] );
    $lastName        = trim( $_POST['last-name'] );
    $email           = trim( $_POST['email'] );
    $confirmEmail    = trim( $_POST['confirm-email'] );
    $password        = trim( $_POST['password'] );
    $confirmPassword = trim( $_POST['confirm-password'] );
    $username        = trim( $_POST['username'] );
    $userRole        = trim( $_POST['user-role'] );

    // validate first name
    if ( empty( $firstName ) ) {
        $errors[] = 'First name is required';
    }

    // validate last name
    if ( empty( $lastName ) ) {
        $errors[] = 'Last name is required';
    }

    // validate email
    if ( empty( $email ) ) {
        $errors[] = 'Email address is required';
    } elseif ( !filter_var( $email, FILTER_VALIDATE_EMAIL ) ) {
        $errors[] = 'Invalid email address';
    }

    // validate confirm email
    if ( empty( $confirmEmail ) ) {
        $errors[] = 'Confirm email address is required';
    } elseif ( $email !== $confirmEmail ) {
        $errors[] = 'Email addresses do not match';
    }

    // validate password
    if ( empty( $password ) ) {
        $errors[] = 'Password is required';
    } elseif ( strlen( $password ) < 6 ) {
        $errors[] = 'Password must be at least 6 characters';
    }

    // validate confirm password
    if ( empty( $confirmPassword ) ) {
        $errors[] = 'Confirm password is required';
    } elseif ( $password !== $confirmPassword ) {
        $errors[] = 'Passwords do not match';
    }

    // validate username
    if ( empty( $username ) ) {
        $errors[] = 'Username is required';
    } elseif ( strlen( $username ) < 4 ) {
        $errors[] = 'Username must be at least 4 characters';
    }

    // validate user role
    if ( empty( $userRole ) ) {
        $errors[] = 'User role is required';
    }

    if ( empty( $errors ) ) {
        // registration form is valid, do something with the data
        // for example, insert the data into a database or send an email
        // and then redirect the user to a success page
        header( 'Location: success.php' );
        exit;
    }
}
?>
