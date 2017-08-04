// default view//
'use strict';
var app = app || {};

const homeView= {};
console.log('Home view working');

homeView.init= function(){
  console.log('inside of homeview.init');
  $('#home').text('Hello page is working!');
}
})(app);


$('#gameStuff').toggleClass('visible');
