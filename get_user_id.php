<?php

include_once './includes/db_connect.php';
include_once './includes/functions.php';

sec_session_start();

class User{

    public $publisher_id;

function get_user_id(){
    $publisher_id = $_SESSION['user_id'];
    return json_encode($publisher_id);
}
}
$user = new User();

$results = $user->get_user_id();

//output in json format
echo $results;
?>

