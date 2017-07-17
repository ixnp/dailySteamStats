
var app = app || {};
var loginForm = $('#login');

loginForm.submit(function(e){
  var username = $('#user').val();
  var password = $('#password').val();
  console.log(''+ username + password);
  $('#login')[0].reset();
  e.preventDefault();
});

//REQUEST TO DATABASE SET UP//
// (function(module) {
//   function Article(rawDataObj) {
//     Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
//   }
//
//   User.all = [];
//
// User.loadAll = rows => {
//   //user info//
// };
//
// User.fetchAll = callback => {
//   $.get('/wordsdb')
//   .then()
// }
