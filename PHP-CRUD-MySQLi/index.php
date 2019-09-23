<!doctype html>
<html lang="en">
  <head>
    <title>PHP CRUD MySQLi</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
  </head>
  <body>
    <?php require_once "process.php"; ?>
    <?php
      $mysqli = new mysqli(DB_HOST,DB_USER,DB_PASS,DB_NAME) or die(mysqli_error($mysqli));
      $sql = "SELECT * FROM data";
      $result = $mysqli->query($sql) or die($mysqli->error);
    ?>
    <div class="row justify-content-center">
    <form class="" action="process.php" method="post">
      <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" name="name" placeholder="Enter your name" value="" class="form-control">
      </div>
      <div class="form-group">
      <label for="location">Location:</label>
      <input type="text" name="location" placeholder="Enter your location" value="" class="form-control">
      </div>
      <div class="form-group">
      <button type="submit" name="save" class="btn btn-primary">Save</button>
      </div>
    </form>
    </div>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
  </body>
</html>
