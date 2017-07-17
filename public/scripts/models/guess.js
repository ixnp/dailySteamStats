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
var guessArr = ['na','na','na','na',];
var test = 'blue'
var i = 0;


var roundForm = $('#roundForm');

roundForm.submit(function(e){
  var numberOfRounds = $('#round').val();
  console.log('test'+ numberOfRounds);
  game();
  $('#form')[0].reset();
  e.preventDefault();
});

//not working need to turn into function that is called after submit//
// roundForm.game = function(){
// while(i < numberOfRounds){
userInput.submit(function(e){
  var userGuess = $('#guess').val();
  console.log('g1'+userGuess);
if (test.indexOf(userGuess)!= -1){
    var position = test.indexOf(userGuess)
      console.log(position);
      console.log('yes!');
    var updateArr = guessArr.splice(position, 1, userGuess);
    console.log(guessArr);

    $('#correctLetters').empty();
    $.each(guessArr, function( index, value ) {
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




//word guess if user toggles class//
 // var userWordGuess = $('#letter').val();
