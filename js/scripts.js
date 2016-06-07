$(document).ready(function() {
  $("#multiplyForm").submit(function(event) {
    event.preventDefault();
    var multiplier = parseInt($("#multiplier").val());
    var ceiling = parseInt($("#ceiling").val());


    if (!multiplier || !ceiling) {
      $("#results p").remove();
      $("#results").append("<p>Please enter a number in both fields.</p>");
    } else if ((multiplier<=0)||(ceiling<=0)){
      $("#results p").remove();
      $("#results").append("<p>Please enter a positive number in both fields.</p>");
    } else if (multiplier > ceiling ) {
      $("#results p").remove();
      $("#results").append("<p>Multiplier must be smaller than the number to count to.</p>");
    } else {
      $("#results p").remove();
      for (var index = multiplier; index <= ceiling; index += multiplier) {
        console.log(index);
        $("#results").append("<p>" + index + "</p>");
      }
    }
  });
});
