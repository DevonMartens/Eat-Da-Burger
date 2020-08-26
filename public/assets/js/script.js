 $(function() { 
     $(".create-form").on("submit", function(event) {
        event.preventDefault();
var id = $(this).data("id");
var newBurger = $(this).data("newburger");

var newBurgerState = {
    burger: newBurger
};

$.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: newBurgerState
  }).then(
    function() {
      // Reload the page to get the updated list
      location.reload();
    }
<<<<<<< HEAD
  );
});

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
=======
    
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoured to ", newDevoured);
>>>>>>> 9ccca8e338e89d8084dc1b327066e279721ca83b
        location.reload();
      }
    );
  });

<<<<<<< HEAD
  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");
=======
  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#bu").val().trim(),
      isDevoured: $("[name=devoured]:checked").val().trim()
    };

    console.log(newBurger);

>>>>>>> 9ccca8e338e89d8084dc1b327066e279721ca83b

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
<<<<<<< HEAD

=======
});
>>>>>>> 9ccca8e338e89d8084dc1b327066e279721ca83b
