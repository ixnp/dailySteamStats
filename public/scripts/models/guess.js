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
var guessArr = [];
var test = 'test'

userInput.submit(function(e){
  var userGuess = $('#guess').val();
  console.log('g1'+userGuess);
if (test.indexOf(userGuess)!= -1){

    console.log('yes!');
}
else{
  console.log('fuck');
}

  $('#form')[0].reset();
  e.preventDefault();

});


//word guess if user toggles class//
 // var userWordGuess = $('#letter').val();
