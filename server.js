'use strict';

const pg = require('pg');
const fs = require('fs');
const express = require ('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();

const conString = process.env.DATABASE_URL || ''
client.connect();
client.on('error', err => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('./public'));
