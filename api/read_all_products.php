<?php

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

// read all products

    $product->publisher_id = $_SESSION['user_id'];
    $results = $product->readAll();

// output in json format
    echo $results;

?>