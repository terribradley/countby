$(document).ready(function() {
  $("#multiplyForm").submit(function(event) {
    event.preventDefault();
    var multiplier = parseInt($("#multiplier").val());
    var ceiling = parseInt($("#ceiling").val());
    evalInput(multiplier, ceiling);
  });
});

var evalInput = function(mult, ceil) {
  if (!mult || !ceil) {
    $("#results p").remove();
    $("#results").append("<p>Please enter a number in both fields.</p>");
  } else if ((mult<=0)||(ceil<=0)){
    $("#results p").remove();
    $("#results").append("<p>Please enter a positive number in both fields.</p>");
  } else if (mult > ceil ) {
    $("#results p").remove();
    $("#results").append("<p>Multiplier must be smaller than the number to count to.</p>");
  } else {
    $("#results p").remove();
    for (var index = mult; index <= ceil; index += mult) {
      console.log(index);
      $("#results").append("<p>" + index + "</p>");
    }
  }

}
