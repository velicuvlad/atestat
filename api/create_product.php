<?php

// if the form was submitted
if ($_POST) {

    include_once '../includes/db_connect.php';
    include_once '../includes/functions.php';

    sec_session_start();

    // include core configuration
    include_once '../config/core.php';

    // include database connection
    include_once '../config/database.php';

    // product object
    include_once '../objects/product.php';

    // class instance
    $database = new Database();
    $db = $database->getConnection();
    $product = new Product($db);

    // set product property values
    $product->name = $_POST['name'];
    $product->price = $_POST['price'];
    $product->description = $_POST['description'];
    $product->category_id = $_POST['category_id'];
    $product->link = $_POST['link'];
    $product->photo = $_POST['photo'];
    $product->yt_link = $_POST['yt_link'];
    $product->publisher_id = $_SESSION['user_id'];

    // create the product
    echo $product->create() ? "true" : "false";
}
?>