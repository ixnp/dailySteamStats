const express = require('express');
const router = express.Router();

//Data base name WordsDB//
//rout to get data from db//
router.get('/wordsdb', function(req,res){
  res.send({type:'GET'});
});
// adding data, add user and words to db//
router.post('/wordsdb', function(req,res){
  res.send({type:'POST'});
});
//update data alrady, update already exsisting users words in db, id will be users id//
router.put('/wordsdb/:id', function(req,res){
  res.send({type:'PUT'});
});
//DELETE user from DB
router.delete('/wordsdb/:id', function(req,res){
  res.send({type:'DELETE'});
});
