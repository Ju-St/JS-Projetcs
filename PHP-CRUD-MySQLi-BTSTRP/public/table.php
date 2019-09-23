<div class="container">
  <div class="page-header">
    <div class="alert alert-info" role="alert">
      <a href="index.php" class="btn btn-info">Add DATA</a>
      <a href="process.php" class="btn btn-info">View DATA</a>
    </div>
  </div>
  <div class="table-responsive">
  <table class="table table-hover">
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Message</th>
        <th>Edit and Delete</th>
      </tr>
    </thead>
    <tbody>
      <?php
        $result = Func::conn()->query("SELECT * FROM " . Func::$table) or trigger_error("Query Failed!");
        Func::conn()->close();
      ?>
      <!-- Using while loop we loop through all rows from the table and we display them -->
      <?php while ($row = $result->fetch_assoc()): ?>
      <tr>
        <td>
          <?=$row['fname']?>
        </td>
        <td>
          <?=$row['lname']?>
        </td>
        <td>
          <?=$row['email']?>
        </td>
        <td>
          <?=$row['message']?>
        </td>
        <td>
          <a href="process.php?edit=<?=$row['id']?>" class="btn btn-info">Edit</a>
          <a href="process.php?delete=<?=$row['id']?>" class="btn btn-danger">Delete</a>
        </td>
      </tr>
    <?php endwhile; ?>
    </tbody>
  </table>
  </div>
</div>
