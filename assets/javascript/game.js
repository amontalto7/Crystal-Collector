var counter = 0;
var wins = 0;
var losses = 0;

function getRandom(min,max) {
    //This function takes two integers- a mininum and a maximum #, and returns a random number within that range
    return Math.floor(Math.random()*(max-min+1)+min);
}

// create an array "numberOptions" which contains 4 randomly generated numbers between 1 and 12
// var numberOptions = [10, 5, 3, 7];

function resetArray(num){
    var ints = [];

    while (ints.length < num ){
        var r = getRandom(1,12);
        if (!ints.indexOf(r) > -1) {
            ints.push(r);
        }
    }
    return ints;
}

var numberOptions = resetArray(4);
console.log(numberOptions);
var numberOptions = resetArray(4);
console.log(numberOptions);
var numberOptions = resetArray(4);
console.log(numberOptions);
var numberOptions = resetArray(4);
console.log(numberOptions);
var numberOptions = resetArray(4);
console.log(numberOptions);




var crystalgame = {
    generateTargetNumber : function() {     // generate a random number between 19 and 120
        return getRandom(19,120); 
    },

    reset : function() {
        targetNumber = crystalgame.generateTargetNumber();
        $("#randomNum").text(targetNumber);
        counter = 0;
        $("#totalscore").text(counter);

    }

}

var targetNumber = crystalgame.generateTargetNumber();

$("#randomNum").text(targetNumber);
$("#wins").text(wins);
$("#losses").text(losses);



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

$(".crystal-image").on("click", function() {
// grab the value from the data-crystalvalue attribute on the image clicked
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

  $("#totalscore").text(counter);

  if (counter == targetNumber) {
    wins++;
    $("#wins").text(wins);
  } else if (counter >= targetNumber) {
    losses++;
    $("#losses").text(losses);
  }
});
