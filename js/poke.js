var async = require("async");

function Pokemon() {
  pokemons = [];
}

function User(name) {
  this.name = name;
  this.score = 0;
}


//populate indexArray with random pokemon from API
Pokemon.prototype.createRandomPokemon = function(){
  var indexArray = [];
  for (i = 1; i < 7; i ++) {
    var randomNumber = Math.floor(Math.random()*721 + 1);
    indexArray.push(randomNumber);
  }
  async.eachSeries(indexArray, function(item, done){
    $.get('http://pokeapi.co/api/v2/pokemon/' + item + '/', function(response) {
      // indexArray.push(response);
      // console.log(response);
      // this.pokemon = [];
      pokemons.push(response);
      console.log(pokemons);
      done();
      // if (this.pokemon.length === 6) {
      //   console.log("test");
      //   for (var i = 0; i < 7; i++) {
      //     $('#showPokemon').append('<img src="' + this.pokemon[i].sprites.front_default + '" alt="" width="200px" height="200px">');
      //     console.log(this.pokemon[i].name);
      //   }
      //   console.log(this.pokemon);
      // }
    });
  });
  return this.pokemon;
};







exports.pokemonModule = Pokemon;
exports.userModule = User;
// exports.createRandomPokemonModule = createRandomPokemon;
