'use strict';

const pg = require('pg');
const fs = require('fs');
const express = require('express');
// const routs = require('scripts/controller/routs.js')
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();
// const conString = 'postgres://USERNAME:PASSWORD@HOST:PORT';
const conString = process.env.DATABASE_URL || 'postgres://postgres:1234@localhost:5432/wordsdb'; // TODO: Don't forget to set your own conString
const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.error(err));


function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));
// app.use(routs)


app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));

const router = express.Router();

//Data base name WordsDB//
//rout to get data from db//
app.get('/wordsdb', function(req,res){
  client.query(`
    SELECT * FROM userinfo
  `)
  .then() //something here//
  res.send({type:'GET'});
});
// adding data, add user and words to db//
app.post('/wordsdb', function(req,res){
  res.send({type:'POST'});
});
//update data alrady, update already exsisting users words in db, id will be users id//
app.put('/wordsdb/:id', function(req,res){
  res.send({type:'PUT'});
});
//DELETE user from DB
app.delete('/wordsdb/:id', function(req,res){
  res.send({type:'DELETE'});
});

module.exports = router;
