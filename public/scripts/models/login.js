'use strict';
(function(module) {

function UserInfo(rawDataObj) {
  Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
}

var app = app || {};
var loginForm = $('#login');
const UserName = []
const Password = []
UserInfo.all = [];


loginForm.submit(function(e){
  var username = $('#user').val();
  var password = $('#password').val();
  console.log(''+ username +' ' + password);
  $('#login')[0].reset();
  e.preventDefault();
});



UserInfo.loadAll = rows => {
  UserInfo.all = rows.map(ele => new UserInfo(ele));
};

UserInfo.fetchAll = callback => {
  $.get('/userinfo')
  .then(
    results => {
      UserInfo.loadAll(results);
      console.log('results'+ results);
      callback();
    }
  )
}







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
})(window);
