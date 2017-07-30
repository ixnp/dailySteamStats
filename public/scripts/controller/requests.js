
(function(module) {
//API NOT WORKING PLAN B get random words from Dtatbase //
// $.ajax({
//   url:'https://wordsapiv1.p.mashape.com/words/apartment/frequency',
//   method: 'GET'
//   headers: {
//     Authorization:'X-Mashape-Key bqQQLMlZqZmshdbM8ZvMthIqqcKRp1owFegjsngWWFBPHJwqkh'
//   }
//   });
//   .then(console.log)
// })
// curl --get --include 'https://wordsapiv1.p.mashape.com/words/?random=true' \
//   -H 'X-Mashape-Key: bqQQLMlZqZmshdbM8ZvMthIqqcKRp1owFegjsngWWFBPHJwqkh' \
//   -H 'Accept: application/json'
  //
  //
  // $.ajax({
  //     url: 'https://wordsapiv1.p.mashape.com/words/?random=true',
  //     headers:{
  //       X-Mashape-Authorization: ''
  //     },
  //     type: 'GET',
  //     dataType: 'json',
  //     contentType: 'application/json',
  //     success: function (data) {
  //       alert(JSON.stringify(data));
  //     },
  //     error: function(){
  //       alert("Cannot get data");
  //     }
  // });
  // .then(console.log)

function RandomWordComplete(data) {
    alert(data.Word);
}

var randomForm = $('#random')
randomForm.submit(function(e){
  RandomWord();
  console.log('test'+ data.Word);
  $('#random')[0].reset();
  e.preventDefault();
});
})(window);
