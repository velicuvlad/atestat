"use strict";

function formhash(form, password) {
    // Create a new element input, this will be our hashed password field.
    var p = document.createElement("input");

    // Add the new element to our form.
    form.appendChild(p);
    p.name = "p";
    p.type = "hidden";
    p.value = hex_sha512(password.value);

    // Make sure the plaintext password doesn't get sent.
    password.value = "";

    // Finally submit the form.
    form.submit();
}

function regformhash(form, uid, email, password, conf) {
    // Check each field has a value
    if (uid.value == '' || email.value == '' || password.value == '' || conf.value == '') {
        alert('Te rugam sa introduci toate datele.');
        return false;
    }

    // Check the username
    re = /^\w+$/;
    if (!re.test(form.username.value)) {
        alert("Numele poate contine doar litere, numere . '_' ");
        form.username.focus();
        return false;
    }

    // Check that the password is sufficiently long (min 6 chars)
    // The check is duplicated below, but this is included to give more
    // specific guidance to the user
    if (password.value.length < 6) {
        alert('Parola trebuie sa aiba cel putin 6 caractere si sa contina o litera mare, una mica si cifre. Te rugam sa incerci din nou');
        form.password.focus();
        return false;
    }

    // At least one number, one lowercase and one uppercase letter
    // At least six characters
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (!re.test(password.value)) {
        alert('Parola trebuie sa aiba cel putin 6 caractere si sa contina o litera mare, una mica si cifre. Te rugam sa incerci din nou');
        return false;
    }

    // Check password and confirmation are the same
    if (password.value != conf.value) {
        alert('Cele doua parole nu corespund. Te rugam sa incerci din nou');
        form.password.focus();
        return false;
    }

    // Create a new element input, this will be our hashed password field.
    var p = document.createElement("input");

    // Add the new element to our form.
    form.appendChild(p);
    p.name = "p";
    p.type = "hidden";
    p.value = hex_sha512(password.value);

    // Make sure the plaintext password doesn't get sent.
    password.value = "";
    conf.value = "";

    // Finally submit the form.
    form.submit();
    return true;
}

//# sourceMappingURL=forms-compiled.js.map

//# sourceMappingURL=forms-compiled-compiled.js.map