<?php

class Func {
  // Static property - name of the table
  public static $table = "data";
  // Static method - connect to MySQL server
  public static function conn(){
    $mysqli = new mysqli(DB_HOST,DB_USER,DB_PASS,DB_NAME) or trigger_error("Connection Failed!");
    return $mysqli;
  }
  // Static method - a function that sanitizes values
  public static function clear($data) {
    $data = trim($data);
    $data = htmlentities($data);
    $data = stripslashes($data);
    // There may be a better way for escaping data for the mysql query ( have to find it though :) )
    $data = mysqli_real_escape_string(self::conn(), $data);
    return $data;
  }

}

?>
