<?php
include_once 'includes/db_connect.php';
include_once 'includes/functions.php';

sec_session_start();

if (login_check($mysqli) == true) {
    $logged = 'in';
} else {
    $logged = 'out';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Personal Blog | Logare</title>

    <style>        #img {
            width: 15%;
            height: 15%;
            margin-left: 85%;
            z-index: 2;
        }</style>

    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/react/0.12.2/react.js"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/react/0.12.2/JSXTransformer.js"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/less.js/1.7.5/less.min.js"></script>

    <link rel="stylesheet" href="src/style/entry/main.css">
    <script type="text/JavaScript" src="js/sha512.js"></script>
    <script type="text/JavaScript" src="js/forms.js"></script>
</head>
<body>
<?php if (login_check($mysqli) == true) : ?>
    <?php
    header('Location: index.php');
    die();
    ?>
<?php else : ?>
    <div id="app"></div>
<?php
if (isset($_GET['error'])) {
    echo '<div class="error-wrapper">
                <div class="error">
                    <p>Email sau parola invalid</p>
                </div>
           </div>
           ';
}
?>
    <div class="container-login">
        <div id="login" class="login">
            <div class="login-icon-field">
                <div style="font-family:Bebas,'sans-serif'; font-size:3vw; text-align:center; color:white;padding:20%;">Logare</div>
            </div>
            <div class="login-form">
                <form action="includes/process_login.php" method="post" name="login_form">
                <div class="username-row row">
                    <label for="username_input">
                        <svg version="1.1" class="user-icon" x="0px" y="0px"
                             viewBox="-255 347 100 100" xml:space="preserve" height="36px" width="30px">
                        <path class="user-path" d="
                  M-203.7,350.3c-6.8,0-12.4,6.2-12.4,13.8c0,4.5,2.4,8.6,5.4,11.1c0,0,2.2,1.6,1.9,3.7c-0.2,1.3-1.7,2.8-2.4,2.8c-0.7,0-6.2,0-6.2,0
                  c-6.8,0-12.3,5.6-12.3,12.3v2.9v14.6c0,0.8,0.7,1.5,1.5,1.5h10.5h1h13.1h13.1h1h10.6c0.8,0,1.5-0.7,1.5-1.5v-14.6v-2.9
                  c0-6.8-5.6-12.3-12.3-12.3c0,0-5.5,0-6.2,0c-0.8,0-2.3-1.6-2.4-2.8c-0.4-2.1,1.9-3.7,1.9-3.7c2.9-2.5,5.4-6.5,5.4-11.1
                  C-191.3,356.5-196.9,350.3-203.7,350.3L-203.7,350.3z"/>
                </svg>
                    </label>
                    <input class="input-login" type="text" class="form-control" id="username" name="email"
                           placeholder="Email"/>
                </div>
                <div class="password-row row">
                    <label for="password_input">
                        <svg version="1.1" class="password-icon" x="0px" y="0px"
                             viewBox="-255 347 100 100" height="36px" width="30px">
                            <path class="key-path" d="M-191.5,347.8c-11.9,0-21.6,9.7-21.6,21.6c0,4,1.1,7.8,3.1,11.1l-26.5,26.2l-0.9,10h10.6l3.8-5.7l6.1-1.1
                 l1.6-6.7l7.1-0.3l0.6-7.2l7.2-6.6c2.8,1.3,5.8,2,9.1,2c11.9,0,21.6-9.7,21.6-21.6C-169.9,357.4-179.6,347.8-191.5,347.8z"/>
                        </svg>
                    </label>
                    <input type="password" class="input-login" id="password" name="password"
                           placeholder="Parola"/>
                    <div class="call-to-action">
                        <input class="input-register" type="submit" value="Logheaza-te" id="login-button"
                               onclick="formhash(this.form, this.form.password);"/>

                        <p class="p-login">Nou pe LevelUp? <a href="register.php" style="text-decoration: none">Creeaza un cont.</a></p>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </div>
    <script type="text/javascript" src="/build/login.js"></script>
<?php endif; ?>
</body>
</html>