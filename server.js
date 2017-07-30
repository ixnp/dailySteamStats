'use strict';

const pg = require('pg');
const fs = require('fs');
const express = require('express');
const unirest = require('unirest');
// const routs = require('scripts/controller/routs.js')
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();
const uni = unirest();
// const conString = 'postgres://USERNAME:PASSWORD@HOST:PORT';
const conString = process.env.DATABASE_URL || 'postgres://postgres:1234@localhost:5432/wordsdb'; // TODO: Don't forget to set your own conString
const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.error(err));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));
// app.use(routs)

app.get('/profile', (request, response) => response.sendFile('profile.html', {root: './public'}));


app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));

const router = express.Router();

app.get('/userinfo', (request, response) => {
  client.query('SELECT * FROM userinfo')
  .then(function(result){
    response.send(result.rows)
  })
  .catch(function(err){
    console.log(err);
  })
})


// $.ajax({
//   url:'https://wordsapiv1.p.mashape.com/words/apartment/frequency',
//   method: 'GET'
//   headers: {
//     Authorization:'X-Mashape-Key bqQQLMlZqZmshdbM8ZvMthIqqcKRp1owFegjsngWWFBPHJwqkh'
//   }
//   });
//   .then(console.log)
// })
//Data base name WordsDB//
//rout to get data from db//
// app.get('/wordsdb', function(req,res){
//   client.query(`
//     SELECT * FROM userinfo
//   `)
//   .then() //something here//
//   res.send({type:'GET'});
// });
// // adding data, add user and words to db//
// app.post('/wordsdb', function(req,res){
//   res.send({type:'POST'});
// });
// //update data alrady, update already exsisting users words in db, id will be users id//
// app.put('/wordsdb/:id', function(req,res){
//   res.send({type:'PUT'});
// });
// //DELETE user from DB
// app.delete('/wordsdb/:id', function(req,res){
//   res.send({type:'DELETE'});
// });
//
// module.exports = router;
