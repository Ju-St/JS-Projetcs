<?php

require_once "db.php";
$mysqli = new mysqli(DB_HOST,DB_USER,DB_PASS,DB_NAME) or die(mysqli_error($mysqli));

if(isset($_POST['save'])){
  $name = $_POST['name'];
  $location = $_POST['location'];
  $sql = "INSERT INTO data (name, location) VALUES('$name', '$location')";
  $mysqli->query($sql) or die($mysqli->error);
}

?>
