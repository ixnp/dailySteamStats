'use strict';
// (function(module) {

function UserInfo(rawDataObj) {
  Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
}

// const UserInfo = [];
var app = app || {};
var loginForm = $('#login');
var loginButton = $('#loginButton')
const NewUserObj = {};
const UserName = [];
const Password = [];
UserInfo.all = [];


//new user//


$('#loginButton').click(function(){
  $('#register').remove();
  loginForm.submit();
});

$('#register').click(function(){
  $('#loginButton').remove();
    $('#enterUserName').toggleClass('visible');
  loginForm.submit();


console.log(UserInfo.all);
//post rest request for when you figure out how to get the values into an object
  // UserInfo.all.prototype.insertNewUser = function(callback) {
  //   $.post('/userinfo', {username: this.username, password: this.password,})
  //   .then(console.log)
  //   .then(callback);
  // };
    // UserInfo.prototype.insertNewUser();


});
// need to get the values into an object serialize may be able to do that
loginForm.submit(function(e){
  var data = {
   username : $('#user').val(),
   password : $('#password').val()
};
var userJsonObj = JSON.stringify(data);
console.log(data);
UserName.push(userJsonObj);

console.log('username'+ UserName);
  $('#login')[0].reset();
  e.preventDefault();
  console.log(data);

  console.log('username'+ UserName);
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


// })(window);
