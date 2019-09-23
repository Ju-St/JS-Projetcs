<?php
// We start the session for session message
session_start();
// Include database constants
require_once "../private/db.php";
// Include some static functions, for variety of the code.
require_once "func.php";
// Set initial value for id to 0
$id = 0;
// Set initial values to empty string, so we don't get any errors
$first_name = $last_name = $email_addr = $edit_message = "";
// We sanitize the input from the form and check if any values have been provided. If none given, "n/a" string will be displayed.
$fname = (isset($_POST["fname"])) ? Func::clear($_POST["fname"]) : "n/a";
$lname = (isset($_POST["lname"])) ? Func::clear($_POST["lname"]) : "n/a";
$email = (isset($_POST["email"])) ? Func::clear($_POST["email"]) : "n/a";
$message = (isset($_POST["message"])) ? Func::clear($_POST["message"]) : "n/a";
?>

<?php
// Include head of HTML
require_once "header.php";
?>

<?php
// isset function checks that the variable is set or not, in other words if the variable has a value or not. In this case isset($_POST['submit']) checks that the $_POST['submit'] is set or not (if the submit button has been clicked)
if (isset($_POST['submit'])) {
  // Establish a connection to MySQL server
  $mysqli = new mysqli(DB_HOST,DB_USER,DB_PASS,DB_NAME);
  // Using the prepare statements for avoiding sql injection (always a good idea to sanitize the data before sending it to the MySQL server)
  $sql = "INSERT INTO data (fname, lname, email, message) VALUES (?, ?, ?, ?)";
  // Prepare the query
  $prepstmt = $mysqli->prepare($sql);
  // Bind values to variables
  $prepstmt->bind_param("ssss", $fname, $lname, $email, $message);
  // Send query
  $prepstmt->execute();
  // Close the query
  $prepstmt->close();
  // Close the connection to MySQL server
  $mysqli->close();
  // Asign a value to the ses_message so we can display it later
  $_SESSION["ses_message"] = "Record has been saved!";
  // Asign a value to the msg_type so we can add it as bootstrap class for the div
  $_SESSION["msg_type"] = "success";
  // Refresh the page after 3 secs
  header("refresh:3; url=process.php");
}

// Using a different approach for the update query
if (isset($_POST['update'])) {
  // We get the id value from the hidden input field of the form (no need for sanitization, because it's a hidden field and can't be modified)
  $id = $_POST['id'];
  // Use global variables that we sanitized earlier
  global $fname,$lname,$email,$message;
  // Using a static property, just to show that we can :)
  $sql = "UPDATE " . Func::$table . " SET fname='{$fname}', lname='{$lname}', email='{$email}', message='{$message}' WHERE id=$id";
  // Using a static method for the query
  Func::conn()->query($sql) or trigger_error("Query Failed!");
  // Close MySQL connection
  Func::conn()->close();
  $_SESSION["ses_message"] = "Record has been updated!";
  $_SESSION["msg_type"] = "warning";
  header("refresh:3; url=process.php");
}

// We delete a selected row by getting the id from GET superglobal (delete button functionality)
if (isset($_GET['delete'])) {
  $id = $_GET['delete'];
  Func::conn()->query("DELETE FROM " . Func::$table . " WHERE id={$id}") or trigger_error("Query Failed!");
  Func::conn()->close();
  $_SESSION["ses_message"] = "Record has been deleted!";
  $_SESSION["msg_type"] = "danger";
  header("refresh:3; url=process.php");
}

// Here we get all fields that we need from database, so we could make changes if necessary (this is the edin button functionality)
if (isset($_GET['edit'])) {
  $id = $_GET['edit'];
  $result = Func::conn()->query("SELECT * FROM " . Func::$table . " WHERE id={$id}") or trigger_error("Query Failed!");
  if($result->num_rows) {
    // Using fetch_array we get values from the fields and asign them to variables, so we could display them in the 'edit' table later.
    $row = $result->fetch_array();
    $first_name = $row['fname'];
    $last_name = $row['lname'];
    $email_addr = $row['email'];
    $edit_message = $row['message'];
  }
  Func::conn()->close();
}
?>
<!-- If session is set we display session message with the corresponding class of alert -->
<?php if (isset($_SESSION['ses_message'])): ?>
<div class="alert alert-<?=$_SESSION['msg_type']?>">
<?php
echo $_SESSION['ses_message'];
// After the message is displayed we destroy it using unset func
unset($_SESSION['ses_message']);
?>
</div>
<?php endif; ?>
<!-- Include table contents fetched from MySQL server -->
<?php
require_once "table.php";
?>
<!-- Include footer file which contains the 'edit' form -->
<?php
require_once "footer.php";
?>
