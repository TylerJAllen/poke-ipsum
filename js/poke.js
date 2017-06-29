var async = require("async");

function Poke() {
  this.pokemon = null;
}

function User(name) {
  this.name = name;
  this.score = 0;
}


//populate indexArray with random pokemon from API
function createRandomPokemon() {
  var indexArray = [];
  for (i = 1; i < 7; i ++) {
    var randomNumber = Math.floor(Math.random()*150 + 1);
    indexArray.push(randomNumber);
  }
  var pokemonArray = [];
  async.eachSeries(indexArray, function(item, done){
    $.get('http://pokeapi.co/api/v2/pokemon/' + item + '/', function(response) {
      // indexArray.push(response);
      // console.log(response);
      pokemonArray.push(response);
      done();
      if (pokemonArray.length === 6) {
        console.log("test");
        for (var i = 0; i < pokemonArray.length; i++) {
          $('#showPokemon').append('<img src="' + pokemonArray[i].sprites.front_default + '" alt="" width="200px" height="200px">');
          console.log(pokemonArray[i].name);
        }
        console.log(pokemonArray);
      }
    });
  });
  return pokemonArray;
}







exports.pokeModule = Poke;
exports.userModule = User;
exports.createRandomPokemonModule = createRandomPokemon;
