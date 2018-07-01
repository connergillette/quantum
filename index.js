'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const Promise = require('bluebird');

const CounterController = require('./controllers/counter.controller');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const LOCAL_SERVER_PORT = 3000;
const LOCAL_DB_URI = 'mongodb://127.0.0.1:27017';

const server = app.listen(process.env.PORT || LOCAL_SERVER_PORT, () => {
  console.log('Server listening on port ' + process.env.PORT || LOCAL_SERVER_PORT);
});

mongoose.connect(process.env.MONGODB_URI, (err, db) => {
  if (!err) {
    console.log('Connected to MongoDB through mLab.');
  } else {
    console.log('MONGO ERROR: ' + err);
  }
});

// Endpoints

app.get('/', function (req, res) {
  CounterController.readClick(res);
});

app.post('/', function (req, res) {
  CounterController.addClick(res)
});