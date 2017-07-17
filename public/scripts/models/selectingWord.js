
//the number of rounds will determin the word length//
var roundInput = $('#roundForm');
roundInput.submit(function(e){
  var numberOfRounds = $('#rounds').val();
  console.log(numberOfRounds);
  $('#form')[0].reset();
  e.preventDefault();
});
