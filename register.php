<?php
include_once 'includes/register.inc.php';
include_once 'includes/functions.php';

sec_session_start();

?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Personal Blog | Register</title>
    <style>
        #img {
            width: 15%;
            height: 15%;
            margin-left: 85%;
            z-index: 2;
        }
    </style>

    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/react/0.12.2/react.js"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/react/0.12.2/JSXTransformer.js"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/less.js/1.7.5/less.min.js"></script>

    <script type="text/JavaScript" src="js/sha512.js"></script>
    <script type="text/JavaScript" src="js/forms.js"></script>
    <link rel="stylesheet" href="/src/style/entry/main.css"/>
</head>
<body>
<?php
if (!empty($error_msg)) {
    echo $error_msg;
}
?>
<?php if (login_check($mysqli) == true) : ?>
    <?php
    header('Location: protected_page.php');
    ?>
<?php else : ?>
    <div id="app"></div>

    <div class="container-register">
        <div id="login" class="login">
            <div>
                <div style="padding:10px; text-align:center; font-family:Bebas;">Create a new account</div>
            </div>
            <form method="post" name="registration_form" action="<?php echo esc_url($_SERVER['PHP_SELF']); ?>">
            <div class="login-form">
                <div class="username-row row">
                    <label for="username_input"></label>
                    <input type='text' name='username' id='username' class="input-login" placeholder="Username" required/>
                </div>

                <div class="email-row row">
                    <label for="email_input"></label>
                    <input class="input-login" type="text" name="email" id="email" placeholder="Email"/>
                </div>

                <div class="password-row row">
                    <label for="password_input"></label>
                    <input class="input-login" type="password"
                           name="password"
                           id="password" placeholder="Password"/>
                </div>


                <div class="password-row row">
                    <label for="password_input"></label>
                    <input class="input-login" type="password"
                           name="confirmpwd"
                           id="confirmpwd" placeholder="Confirm password"/>
                </div>

                <div class="fname-row row">
                    <label for="fname_input"></label>
                    <input class="input-login" type="text" name="first_name" id="first_name" placeholder="First Name"/>
                </div>

                <div class="lname-row row">
                    <label for="lname_input"></label>
                    <input class="input-login" type="text" name="last_name" id="last_name" placeholder="Last Name"/>
                </div>

                <div class="birth-row row">
                    <label for="birth_input"></label>
                    <input class="input-login" type="text" name="birthdate" id="birthdate"
                           placeholder="Birthday (dd/mm/yyyy)"/>
                </div>

                <div class="lname-row row">
                    <label for="publisher_name"></label>
                    <input class="input-login" type="text" name="publisher_name" id="publisher_name"
                           placeholder="Nickname"/>
                </div>
                <select name="usertype_id" id="usertype_id" class="styled">
                    <option selected="selected" disabled="">Account type</option>
                    <option value="user">Visitor</option>
                    <option value="creator">Blogger</option>
                </select>
                <div class="button-wrapper">
                    <input class="input-register" type="submit"
                           value="Register"
                           onclick="return regformhash(this.form,
                                   this.form.username,
                                   this.form.email,
                                   this.form.password,
                                   this.form.confirmpwd,
                                   this.form.usertype_id,
                                   this.form.first_name,
                                   this.form.last_name,
                                   this.form.birthdate,
                                   this.form.publisher_name);"/>

            </div>
                <p class="p-register">Already got an account? <a href="login.php" style="text-decoration: none">Login</a></p>
            </div>
                </form>
        </div>
    </div>
<?php endif; ?>
<script src="/build/register.js"></script>
</body>
</html>