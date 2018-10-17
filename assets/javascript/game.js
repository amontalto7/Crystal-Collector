var counter = 0;
var targetNumber = 53;
var wins = 0;
var losses = 0;

$("#randomNum").text(targetNumber);
$("#wins").text(wins);
$("#losses").text(losses);

var numberOptions = [10, 5, 3, 7];

for (var i = 0; i < numberOptions.length; i++) {
  // For each iteration, we will create an imageCrystal
  var imageCrystal = $("<img>");

  // Each crystal will be given the class ".crystal-image".
  imageCrystal.addClass("crystal-image");

  // Each imageCrystal will be given a src link to a unique crystal image
  var imgSrc = "assets/images/crystal" + i + ".png";
  imageCrystal.attr("src", imgSrc);
  imageCrystal.attr("alt", "Crystal"+i);

  // Each imageCrystal will be given a data attribute called data-crystalValue.
  // This data attribute will be set equal to the array value.
  imageCrystal.attr("data-crystalvalue", numberOptions[i]);

  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  $("#crystalContainer").append(imageCrystal);
}

var increment = numberOptions[Math.round(Math.random())];

$(".crystal-image").on("click", function() {
// grab the value from the data-crystalvalue attribute on the image clicked
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // counter += increment;
  $("#totalscore").text(counter);

  if (counter == targetNumber) {
    wins++;
    $("#wins").text(wins);
  } else if (counter >= targetNumber) {
    losses++;
    $("#losses").text(losses);
  }
});
