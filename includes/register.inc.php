<?php

/*
 * Copyright (C) 2013 peter
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

include_once 'db_connect.php';
include_once 'psl-config.php';

$error_msg = "";

if (isset($_POST['username'], $_POST['email'], $_POST['p'], $_POST['first_name'], $_POST['last_name'], $_POST['birthdate'], $_POST['usertype_id'], $_POST['publisher_name'])) {
    // Sanitize and validate the data passed in
    $username = filter_input(INPUT_POST, 'username', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $email = filter_var($email, FILTER_VALIDATE_EMAIL);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Not a valid email
        $error_msg .= '<p class="error">Te rugam sa introduci un email valid</p>';
    }

    $password = filter_input(INPUT_POST, 'p', FILTER_SANITIZE_STRING);
    if (strlen($password) != 128) {
        // The hashed pwd should be 128 characters long.
        // If it's not, something really odd has happened
        $error_msg .= '<p class="error">Te rugam sa introduci o parola valida</p>';
    }
    //checking everything after password

    $first_name = $_POST['first_name'];
    $first_name = filter_input(INPUT_POST, 'first_name', FILTER_SANITIZE_STRING);
    if (strlen($first_name) < 1) {
        $error_msg .= '<p class="error">Prenume invalid</p>';
    }
    $last_name = $_POST['last_name'];
    $last_name = filter_input(INPUT_POST, 'last_name', FILTER_SANITIZE_STRING);
    if (strlen($last_name) < 1) {
        $error_msg .= '<p class="error">Nume de familie invalid</p>';
    }
    $publisher_name = filter_input(INPUT_POST, 'publisher_name', FILTER_SANITIZE_STRING);
    $birthdate = $_POST['birthdate'];
    if (strlen($birthdate) <= 0) {
        $error_msg .= '<p>Zi de nastere invalida</p>';
    }
    $usertype_id = $_POST['usertype_id'];
    if ($usertype_id == 'user')
        $usertype_id = 1;
    else
        $usertype_id = 2;


    // Username validity and password validity have been checked client side.
    // This should should be adequate as nobody gains any advantage from
    // breaking these rules.
    //

    $prep_stmt = "SELECT id FROM members WHERE email = ? LIMIT 1";
    $stmt = $mysqli->prepare($prep_stmt);

    if ($stmt) {
        $stmt->bind_param('s', $email);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows == 1) {
            // A user with this email address already exists
            $error_msg .= '<p class="error">Un utilizator cu acest email exista deja!</p>';
        }
    } else {
        $error_msg .= '<p class="error">Eroare la introducere in baza de date. Te rugam sa incerci din nou.</p>';
    }

    // TODO:
    // We'll also have to account for the situation where the user doesn't have
    // rights to do registration, by checking what type of user is attempting to
    // perform the operation.

    if (empty($error_msg)) {
        // Create a random salt
        $random_salt = hash('sha512', uniqid(openssl_random_pseudo_bytes(16), TRUE));

        // Create salted password
        $password = hash('sha512', $password . $random_salt);

        // Insert the new user into the database
        if ($insert_stmt = $mysqli->prepare("INSERT INTO members (username, email, password, salt, usertype_id, first_name, last_name,
        birthdate, publisher_name) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)")) {
            $insert_stmt->bind_param('sssssssss', $username, $email, $password, $random_salt , $usertype_id, $first_name, $last_name, $birthdate, $publisher_name);
            // Execute the prepared query.
            if (! $insert_stmt->execute()) {
                header('Location: ../error.php?err=Registration failure: INSERT');
                exit();
            }
        }
        header('Location: ./register_success.php');
        exit();
    }
}