<?php
include_once 'includes/db_connect.php';
include_once 'includes/functions.php';

sec_session_start();
?>
<?php if (login_check($mysqli) == true) : ?>
    <!DOCTYPE html>
    <html lang="en">
    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Level Up | Administrare Jocuri</title>

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
    <div>
        <?php
        // include configuration file
        include 'config/core.php';
        // placeholder for rendering React components
        echo "<div id='app'></div>";
        // page footer
        ?>
    </div>
    <script type="text/javascript" src="/build/content.js"></script>
    <script src="libs/js/jquery.js"></script>
    <script src="libs/css/bootstrap/js/bootstrap.min.js"></script>
    </body>
    </html>
<?php else : ?>
    <?php header('Location: content_newest.php') ?>
<?php endif; ?>
