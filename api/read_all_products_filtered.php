<?php
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
$product->category_id = $_GET['category_id1'];
$results = $product->readAllFiltered();

// output in json format
echo $results;
?>