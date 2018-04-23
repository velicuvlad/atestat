<?php
include_once 'includes/register.inc.php';
include_once 'includes/functions.php';

sec_session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Level Up</title>

    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/react/0.12.2/react.js"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/react/0.12.2/JSXTransformer.js"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/less.js/1.7.5/less.min.js"></script>

    <link href="libs/css/bootstrap/css/bootstrap.css" rel="stylesheet" media="screen">
    <link rel="stylesheet" href="src/style/entry/main.css">
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />

    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
</head>
<body>
<?php if (login_check($mysqli) == true) : ?>
    <div id="app"></div>
    <script type="text/javascript" src="/build/indexlogged.js"></script>
    <script src="libs/js/jquery.js"></script>
    <script src="libs/css/bootstrap/js/bootstrap.min.js"></script>
<?php else : ?>
    <?php header('Location: index.php') ?>
<?php endif; ?>
</body>
</html>