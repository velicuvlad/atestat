<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Level Up | Registration Successful</title>
    <link rel="stylesheet" href="/src/style/entry/main.css" />
</head>
<body class="bodylogin">
<div class="login-success">
<h1>Registration successful!</h1>
<p>If this doesn't redirect you in 2 seconds, click <a href="index.php">here</a>.</p>
</div>
<?php
header('Refresh: 2; index.php');
?>
</body>
</html>