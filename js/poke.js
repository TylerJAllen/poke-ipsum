var async = require("async");

function Pokemon() {
  this.pokemon = [];
}

function Character() {
  this.name = "justin";
}

// function Character() {
//   this.bottom = 0;
//   this.left = 0;
//   this.steps = 50;
//   this.interval = 5;
//   this.debug = true;
//   this.el = $('.box');
//   this.ws = $('.winsize');
//   this.upGif = "images/up.gif";
//   this.downGif = "images/down.gif";
//   this.rightGif = "images/right.gif";
//   this.leftGif = "images/left.gif";
//   this.maxBottom = $(window).height() - 50;
//   this.maxLeft = $(window).width() - 50;
//
// }

//random number generator
function randNumGenerator(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//populate Pokemon.pokemons with random pokemon from API
Pokemon.prototype.createRandomPokemon = function(){
  this.pokemon = [];
  var that = this;
    var randomNumber = randNumGenerator(1, 721);
    $.get('http://pokeapi.co/api/v2/pokemon/' + randomNumber + '/', function(response) {
      that.pokemon.push(response);
    });
  console.log(that.pokemon);
};

// 
// Pokemon.prototype.catchProbability = function(){
//   var chanceToCatch = randNumGenerator(1, 3);
//   return chanceToCatch;
// };





exports.pokemonModule = Pokemon;
exports.characterModule = Character;
