require('dotenv').config();
const express = require('express');
const app = express();
const key = require('../config.js');
const myAPIKey = process.env.myAPIKey || key;
const axios = require('axios');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/public'));
const port = 3000;

app.get('/', (req, res) => {
  console.log('in here??');
});

app.listen(port, () => {
  console.log(`listening on ${port}`)
  // console.log('git', key.FEC_Token)
});
