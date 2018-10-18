var counter = 0;
var wins = 0;
var losses = 0;

function getRandom(min, max) {
  //This function takes two integers- a mininum and a maximum #, and returns a random number within that range
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// create an array "numberOptions" which contains 4 randomly generated numbers between 1 and 12

function resetArray(num) {
  // this function will generate an array of UNIQUE random numbers
  var ints = [];

  while (ints.length < num) {
    var r = getRandom(1, 12);
    if (ints.indexOf(r) === -1) {
      ints.push(r);
    }
  }
  return ints;
}

// game object
var crystalgame = {
  numberOptions: [],    // empty array that will store crystal values
  generateTargetNumber: function() {
    // generate a random number between 19 and 120
    return getRandom(19, 120);
  },

  reset: function() {
    targetNumber = this.generateTargetNumber();
    $("#randomNum").text(targetNumber);
    counter = 0;
    $("#totalscore").text(counter);
    this.numberOptions = resetArray(4); // generate new numbers
    console.log("inside: " + this.numberOptions);

    // re-assign the new attributes to the crystal images
    for (var i = 0; i < this.numberOptions.length; i++) {
      $("#Crystal" + i).attr("data-crystalvalue", this.numberOptions[i]);
    }
  }
};

$("#wins").text(wins);
$("#losses").text(losses);

crystalgame.reset();

// generate crystals
for (var i = 0; i < crystalgame.numberOptions.length; i++) {
  // For each iteration, we will create an imageCrystal
  var imageCrystal = $("<img>");

  // Each crystal will be given the class ".crystal-image".
  imageCrystal.addClass("crystal-image");

  // Each imageCrystal will be given a src link to a unique crystal image
  var imgSrc = "assets/images/crystal" + i + ".png";
  imageCrystal.attr("src", imgSrc);
  imageCrystal.attr("alt", "Crystal" + i);
  imageCrystal.attr("id", "Crystal" + i);

  // Each imageCrystal will be given a data attribute called data-crystalValue.
  // This data attribute will be set equal to the array value.
  imageCrystal.attr("data-crystalvalue", crystalgame.numberOptions[i]);
  console.log(imageCrystal);
  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  $("#crystalContainer").append(imageCrystal);
}

$(".crystal-image").on("click", function() {
  // grab the value from the data-crystalvalue attribute on the image clicked
  var crystalValue = $(this).attr("data-crystalvalue");
  crystalValue = parseInt(crystalValue);

  // Every click, from every crystal adds to the global counter.
  counter += crystalValue;
  console.log("CrystalValue: " + crystalValue);

  $("#totalscore").text(counter);

  if (counter == targetNumber) {
    wins++;
    $("#wins").text(wins);
    crystalgame.reset();
  } else if (counter >= targetNumber) {
    losses++;
    $("#losses").text(losses);
    crystalgame.reset();
  }
});