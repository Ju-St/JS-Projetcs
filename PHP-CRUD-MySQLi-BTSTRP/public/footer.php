<div class="container">
  <div class="row">
    <div class="col-sm-8 col-sm-offset-2">
      <div class="panel panel-default">
        <div class="panel-body">
          <form id="signupForm" method="post" class="form-horizontal" action="process.php">
            <div class="form-group">
              <input type="hidden" name="id" value="<?=$id?>">
              <label class="col-sm-4 control-label" for="fname">First name</label>
              <div class="col-sm-5">
                <input type="text" class="form-control" id="fname" name="fname" value="<?=$first_name?>" placeholder="First name" />
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-4 control-label" for="lname">Last name</label>
              <div class="col-sm-5">
                <input type="text" class="form-control" id="lname" name="lname" value="<?=$last_name?>" placeholder="Last name" />
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-4 control-label" for="email">Email</label>
              <div class="col-sm-5">
                <input type="text" class="form-control" id="email" name="email" value="<?=$email_addr?>" placeholder="Email" />
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-4 control-label" for="message">Message</label>
              <div class="col-sm-5">
                <textarea id="message" name="message" rows="6" cols="80" placeholder="Enter Message" class="form-control" required><?=$edit_message?></textarea>
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-9 col-sm-offset-4">
                <button type="submit" class="btn btn-primary" name="update" value="Update">Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
<script>
  $.validator.setDefaults({
  });

  $(document).ready(function() {
    $("#signupForm").validate({
      rules: {
        fname: {
          required: true,
          minlength: 2
        },
        lname: {
          required: true,
          minlength: 2
        },
        email: {
          required: true,
          email: true
        },
        message: {
          required: true,
          minlength: 5
        }
      },
      messages: {
        fname: {
          required: "Please enter your first name",
          minlength: "Your first name must consist of at least 2 characters"
        },
        lname: {
          required: "Please enter your last name",
          minlength: "Your last name must consist of at least 2 characters"
        },
        email: "Please enter a valid email address",
        message: {
          required: "Please enter your message",
          minlength: "Your message must consist of at least 5 characters"
        }
      },
      errorElement: "em",
      errorPlacement: function(error, element) {
        // Add the `help-block` class to the error element
        error.addClass("help-block");

        // Add `has-feedback` class to the parent div.form-group
        // in order to add icons to inputs
        element.parents(".col-sm-5").addClass("has-feedback");

        if (element.prop("type") === "checkbox") {
          error.insertAfter(element.parent("label"));
        } else {
          error.insertAfter(element);
        }

        // Add the span element, if doesn't exists, and apply the icon classes to it.
        if (!element.next("span")[0]) {
          $("<span class='glyphicon glyphicon-remove form-control-feedback'></span>").insertAfter(element);
        }
      },
      success: function(label, element) {
        // Add the span element, if doesn't exists, and apply the icon classes to it.
        if (!$(element).next("span")[0]) {
          $("<span class='glyphicon glyphicon-ok form-control-feedback'></span>").insertAfter($(element));
        }
      },
      highlight: function(element, errorClass, validClass) {
        $(element).parents(".col-sm-5").addClass("has-error").removeClass("has-success");
        $(element).next("span").addClass("glyphicon-remove").removeClass("glyphicon-ok");
      },
      unhighlight: function(element, errorClass, validClass) {
        $(element).parents(".col-sm-5").addClass("has-success").removeClass("has-error");
        $(element).next("span").addClass("glyphicon-ok").removeClass("glyphicon-remove");
      }
    });
  });
</script>
</body>

</html>
