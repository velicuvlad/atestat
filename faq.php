<?php
include_once 'includes/register.inc.php';
include_once 'includes/functions.php';

sec_session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Level Up | Frequently Asked Questions</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
          crossorigin="anonymous">
    <link rel="stylesheet" href="src/style/entry/main.css">
</head>
<body>
<?php if (login_check($mysqli) == true) : ?>
    <div id="app">
    </div>
    <script type="text/javascript" src="/build/faqLogged.js"></script>
<?php else : ?>
    <div id="app">
    </div>
    <a href="/api/get_user_id.php">ss</a>
    <script type="text/javascript" src="build/faqNotLogged.js"></script>
<?php endif; ?>
</body>
</html>