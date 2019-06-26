$(document).ready(function() {

//Variables
var strength = 0;
var constitution = 0;
var agility = 0;
var magic = 0;
var characterStartingStats;

//Objects
//export
function RealPlayer(strength, constitution, agility, magic) {

  this.strength = strength,
  this.constitution = constitution,
  this.agility = agility,
  this.magic = magic
}
//Character Prototypes
RealPlayer.prototype.basePlayer = function() {
  return this.strength + this.constitution + this.agility + this.magic
}

//Character Creation Submit
$("#createCharacter").click(function(event) {
  event.preventDefault();
  var inputtedStrength = parseInt($("#characterStartingStrength").val());
  var inputtedConstitution = parseInt($("#characterStartingConstitution").val());
  var inputtedAgility = parseInt($("#characterStartingAgility").val());
  var inputtedMagic = parseInt($("#characterStartingMagic").val());
characterStartingStats = new RealPlayer(inputtedStrength, inputtedConstitution, inputtedAgility, inputtedMagic);
console.log(characterStartingStats.basePlayer());
$("#output").text(inputtedStrength + " Strength " + inputtedConstitution + " Constitution " + inputtedAgility + " Agility " + inputtedMagic + " Magic ");
statCheck();
console.log(statCheck);
  });
  function statCheck() {
    if (characterStartingStats.basePlayer() > 10){
      alert("There is a maximum of 10 starting stat points");
      var inputtedStrength = 0;
      var inputtedConstitution = 0;
      var inputtedAgility = 0;
      var inputtedMagic = 0;
      $("#output").text(inputtedStrength + " Strength " + inputtedConstitution + " Constitution " + inputtedAgility + " Agility " + inputtedMagic + " Magic ");
    }
  }
  console.log(statCheck);

});
