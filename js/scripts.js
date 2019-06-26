$(document).ready(function() {

//Variables
var strength = 0;
var constitution = 0;
var agility = 0;
var magic = 0;
var characterStartingStats;

//Objects
function RealPlayer(strength, constitution, agility, magic) {

  this.strength = strength,
  this.constitution = constitution,
  this.agility = agility,
  this.magic = magic
}
//Character Prototypes
RealPlayer.prototype.basePlayer = function() {
  return this.strength.toString() + this.constitution.toString() + this.agility.toString() + this.magic.toString()
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


  });
});
