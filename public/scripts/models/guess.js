'use strict';

// (function (module) {
//
// $('#wordGuess').click(funtion(
//   $('#letter').toggleClass('wordGuess')
// ));
//
//
//
// })(window);
// Uster wants to guess a full word//
$('#wordGuess').on('click',function(){
  $('#guess').toggleClass('letter userWordGuess');
});

//letter guess//
var userInput = $('#form');
var test = 'blue'
var i = 0;
//testing split will be const wordFromDB = wordFromDB;
var wordFromDB = 'word'



// const WordInPlay = [];
const wordDisplayArr = [];
const wordsTableNumber = [];
const wordId = [];


var roundForm = $('#roundForm');

roundForm.submit(function(e){
  var numberOfRounds = $('#round').val();
  console.log('test'+ numberOfRounds);
  $('#form')[0].reset();
  e.preventDefault();
  function getRandomInt() {
  return Math.floor((Math.random() * 4) + 1);
  }
  var id= getRandomInt();

  wordId.push(id)
  wordsTableNumber.push('words'+numberOfRounds);
console.log('outsideWords'+ wordsTableNumber);
console.log('randomOutside'+ wordId);
fetchWord();
});

function getRandomInt(number) {
  return Math.floor(Math.random(number));
}

function fetchWord(){
  $.get('/word'),function(word){
    console.log('fetch'+ response + word);
  }
}

var WordInPlay = wordFromDB.split('');
console.log(WordInPlay);

// const wordsTableID = function(){}

//not working need to turn into function that is called after submit//
// roundForm.game = function(){

userInput.submit(function(e){
  var userGuess = $('#guess').val();
  console.log('g1'+userGuess);
if (WordInPlay.indexOf(userGuess)!= -1){
    var position = WordInPlay.indexOf(userGuess)
      console.log(position);
      console.log('yes!');
      var updateArr = wordDisplayArr.splice(position, 1, userGuess);

    console.log(WordInPlay);

    $('#correctLetters').empty();
    $.each(wordDisplayArr, function( index, value ) {
        $('#correctLetters').append('<div>'+ value +'</div>')
    });
i++;
}
else{
  alert('nope, try again!')
  console.log('fuck');
  i++;
}

  $('#form')[0].reset();
  e.preventDefault();
});
// }};
