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
    response.send(result.rows);
  })
  .catch(function(err){
    console.log(err);
  })
})

app.post('/userinfo', (request, response) => {
  client.query(
    'INSERT INTO userinfo(username, password) VALUES($1, $2, $3, $4) ON CONFLICT DO NOTHING',
    [request.body.username, request.body.password, request.body.win, request.body.loss]
  )

  .then(() => response.send('Insert complete'))
  .catch(console.error);
});




//REST GET FOR WORDS not working
// app.get('/word', (request, response) => {
//   client.query("'SELECT* FROM '+ wordsTableNumber+' WHERE id ='+ wordId ")
//   .then(function(result){
//       response.send('SUCCESS!');
//   })
//   .catch(function(err){
//     console.log(err);
//   })
// })
