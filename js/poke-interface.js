var Poke = require('./../js/poke.js').pokeModule;
var User = require('./../js/poke.js').userModule;
var async = require("async");
var createRandomPokemon = require('./../js/poke.js').createRandomPokemonModule;

$(function(){
  // var pokemon = new XMLHttpRequest();
  // $('#pokemon-form').click(function() {
      // var pokemonIndex = $('#pokemon').val();
      // $('#pokemon').val("");
  var pokemonArray = createRandomPokemon();
  $('#startButton').click(function(){
    $('#startPage').hide();
    $('#mapPage').show();
    $('.box').show();
  });



//
// $(function(){
//   $('#user-form').click(function(){
//     var inputName = $('#userName').val();
//     var NewUser = new User(inputName);
//
//   });
// });


//-----movement of character with arrow keys------//
  var bottom = 0;
  var left = 0;

  // Settings
  var steps = 50;
  var interval = 5;
  var debug = true;

  // Elements
  var el = $('.box');
  var ws = $('.winsize');

  //Direction Images
  var upGif = "images/up.gif";
  var downGif = "images/down.gif";
  var rightGif = "images/right.gif";
  var leftGif = "images/left.gif";

  var maxBottom = $(window).height();
  var maxLeft = $(window).width();
  maxLeft -= 50;
  maxBottom -= 50;
  ws.html(maxBottom + 'px | ' + maxLeft + 'px');

  $(window).resize(function() {
    maxBottom = $(window).height();
    maxLeft = $(window).width();
    maxBottom -= 50;
    maxLeft -= 50;
    ws.html(maxBottom + 'px | ' + maxLeft + 'px');
  });

  function moveDiv() {
    if (debug) {
      // el.html('L: ' + left + 'px<br>B: ' + bottom + 'px');
      ws.show();
    } else if ($('#debug').not(':checked')) {
      el.html('');
      ws.hide();
    }
    Mousetrap.bind('up', function() {
      if (bottom < maxBottom) {el.css('bottom', bottom+=steps); el.css('background-image', 'url(' + upGif + ')');}
    });
    Mousetrap.bind('down', function() {
      if (bottom > 0) {el.css('bottom', bottom-=steps); el.css('background-image', 'url(' + downGif + ')');}
    });
    Mousetrap.bind('left', function() {
      if (left > 0) {el.css('left', left-=steps); el.css('background-image', 'url(' + leftGif + ')');}
    });
    Mousetrap.bind('right', function() {
      if (left < maxLeft) {el.css('left', left+=steps); el.css('background-image', 'url(' + rightGif + ')');}
    });
    Mousetrap.bind('shift', function() {
      $('.help').fadeOut('slow');
      if (debug)
        debug = false;
      else
        debug = true;
    });
  }

  setInterval(moveDiv, interval);

});
