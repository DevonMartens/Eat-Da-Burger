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
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

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

