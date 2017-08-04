'use strict';
// (function(module) {

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
}
// dont delete working
$('#button').on('click',function(){
$.ajax({
  url:'/userinfo',
  contentType:'json',
  success: function(response){
    console.log(response);
    UserInfo.loadAll(response);
    callback();

  }
});
});
//new user//
UserInfo.prototype.insertNewUser = function(callback) {
  $.post('/userinfo', {username: this.username, password: this.password, win: this.win, loss: this.loss,})
  .then(console.log)
  .then(callback);
};


// })(window);
