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

}
else{

  console.log('fuck');
}

  $('#form')[0].reset();
  e.preventDefault();

  $.each(guessArr, function( index, value ) {
      $('#correctLetters').append('<div>'+ value +'</div>')
  });

});
//  var newli = '<div>' + guessArr + '</div>'
//
// $(guessArr).each(function(i){
//   $('#correctLetters').append(newli)
// });




//word guess if user toggles class//
 // var userWordGuess = $('#letter').val();
