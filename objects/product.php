<?php

include_once "../category_search.php";
include_once "../includes/session.php";

class Product
{

    // database connection and table name
    private $conn;
    private $table_name = "products";

    // object properties
    public $id;
    public $name;
    public $price;
    public $description;
    public $category_id;
    public $link;
    public $photo;
    public $yt_link;
    public $publisher_id;
    public $publisher_name;

    public $timestamp;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function create()
    {
        try {

            // insert query
            $query = "INSERT INTO products
                SET name=:name, description=:description, price=:price, category_id=:category_id, publisher_id=:publisher_id, link=:link, photo=:photo,yt_link=:yt_link, created=:created ";

            // prepare query for execution
            $stmt = $this->conn->prepare($query);
            // sanitize
            $name = htmlspecialchars(strip_tags($this->name));
            $description = htmlspecialchars(strip_tags($this->description));
            $price = htmlspecialchars(strip_tags($this->price));
            $category_id = htmlspecialchars(strip_tags($this->category_id));
            $link = htmlspecialchars(strip_tags($this->link));
            $photo = htmlspecialchars(strip_tags($this->photo));
            $yt_link = htmlspecialchars(strip_tags($this->yt_link));
            $publisher_id = $this->publisher_id;

            // bind the parameters
            $stmt->bindParam(':name', $name);
            $stmt->bindParam(':description', $description);
            $stmt->bindParam(':price', $price);
            $stmt->bindParam(':category_id', $category_id);
            $stmt->bindParam(':link', $link);
            $stmt->bindParam(':photo', $photo);
            $stmt->bindParam('yt_link', $yt_link);
            $stmt->bindParam('publisher_id', $publisher_id);

            // we need the created variable to know when the record was created
            // also, to comply with strict standards: only variables should be passed by reference
            $created = date('Y-m-d H:i:s');
            $stmt->bindParam(':created', $created);

            // Execute the query
            if ($stmt->execute()) {
                return true;
            } else {
                return false;
            }

        } // show error if any
        catch (PDOException $exception) {
            die('ERROR: ' . $exception->getMessage());
        }
    }

    /*
     * "SELECT p.id, p.name, p.description, p.price, p.photo ,c.name AS category_name
                FROM " . $this->table_name . " p
                    LEFT JOIN categories c
                        ON p.category_id=c.id
                        WHERE p.publisher_id =" . $this->publisher_id . "
                ORDER BY id DESC";
     */
    public function readAll()
    {
        //select all data
        $query = "SELECT p.id, p.name, p.description, p.price, p.category_id, p.link, p.photo, p.yt_link, c.name AS category_name
                FROM " . $this->table_name . " p LEFT JOIN categories c ON p.category_id=c.id
                WHERE p.publisher_id =" . $this->publisher_id . "
                 ORDER BY id DESC";

        $stmt = $this->conn->prepare($query);

        $stmt->execute();

        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return json_encode($results);
    }

    public function readAllNotLogged()
    {
        //select all data
        $query = "SELECT p.id, p.name, p.description, p.price, p.photo ,c.name AS category_name
                FROM " . $this->table_name . " p
                    LEFT JOIN categories c
                        ON p.category_id=c.id
                ORDER BY id DESC";

        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return json_encode($results);
    }

    public function readAllNewest()
    {
        //select all data
        $query = "SELECT p.id, p.name, p.description, p.price, p.photo , p.created, c.name AS category_name
                FROM " . $this->table_name . " p
                    LEFT JOIN categories c
                        ON p.category_id=c.id
                ORDER BY created DESC";

        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return json_encode($results);
    }

    public function readAllFiltered()
    {
        //select all data
        $query = "SELECT p.id, p.name, p.description, p.price, p.category_id, p.photo, c.name AS category_name
                FROM " . $this->table_name . " p
                    LEFT JOIN categories c
                        ON p.category_id=c.id
                        WHERE p.category_id=" . $this->category_id . "
                ORDER BY id DESC";

        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return json_encode($results);
    }

    public function readAllMainPage(){

        $query = "SELECT p.id, p.name, p.description, p.price, p.photo , p.created, c.name AS category_name
                FROM " . $this->table_name . " p
                    LEFT JOIN categories c
                        ON p.category_id=c.id 
                ORDER BY created DESC";

        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return json_encode($results);
    }

    public function readOne()
    {

        // select one record
        $query = "SELECT p.id, p.name, p.description, p.price, p.category_id, p.link, p.photo, p.yt_link, c.name AS category_name
                FROM " . $this->table_name . " p LEFT JOIN categories c ON p.category_id=c.id
                WHERE p.id=:id";

        //prepare query for excecution
        $stmt = $this->conn->prepare($query);

        $id = htmlspecialchars(strip_tags($this->id));
        $stmt->bindParam(':id', $id);
        $stmt->execute();

        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return json_encode($results);
    }

    public function update()
    {

        $query = "UPDATE products
                SET name=:name, description=:description, price=:price, publisher_id=:publisher_id ,category_id=:category_id, link=:link, photo=:photo, yt_link=:yt_link
                WHERE id=:id";

        //prepare query for excecution
        $stmt = $this->conn->prepare($query);

        // sanitize
        $name = htmlspecialchars(strip_tags($this->name));
        $description = htmlspecialchars(strip_tags($this->description));
        $price = htmlspecialchars(strip_tags($this->price));
        $category_id = htmlspecialchars(strip_tags($this->category_id));
        $id = htmlspecialchars(strip_tags($this->id));
        $link = htmlspecialchars(strip_tags($this->link));
        $photo = htmlspecialchars(strip_tags($this->photo));
        $yt_link = htmlspecialchars(strip_tags($this->yt_link));
        $publisher_id = $_SESSION['user_id'];

        // bind the parameters
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':description', $description);
        $stmt->bindParam(':price', $price);
        $stmt->bindParam(':category_id', $category_id);
        $stmt->bindParam(':id', $id);
        $stmt->bindParam(':link', $link);
        $stmt->bindParam(':photo', $photo);
        $stmt->bindParam('yt_link', $yt_link);
        $stmt->bindParam('publisher_id', $publisher_id);

        // execute the query
        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }

    // delete selected products
    public function delete($ins)
    {

        // query to delete multiple records
        $query = "DELETE FROM products WHERE id IN (:ins)";

        $stmt = $this->conn->prepare($query);

        // sanitize
        $ins = htmlspecialchars(strip_tags($ins));

        // bind the parameter
        $stmt->bindParam(':ins', $ins);

        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }
}