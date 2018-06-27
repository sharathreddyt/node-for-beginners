const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fs = require('fs');
const cors = require('cors');

const user = require('./models/UserSchema');
const chit = require('./models/chitSchema');

mongoose.connect('mongodb://localhost:27017/test', (err, res) => {
  if (err) return err;
  console.log('success');
});

mongoose.connection
  .once('open', () => {
    console.log('connected to mongo');
  })
  .on('error', () => {
    console.log("uh-oh couldn't connect to mongo");
  });

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/chit', (req, res) => {
  chit.find({}, (err, data) => {
    res.send(data);
  });
});

app.get('/show', (req, res) => {
  user.find({}, (err, data) => {
    res.send(data);
  });
});

app.post('/chit', (req, res) => {
  const { name, startDate, endDate, amount, users } = req.body;
  console.log('====================================');
  console.log(req.body);
  console.log('====================================');
  const newChit = new chit({
    name,
    startDate,
    endDate,
    amount,
    users,
  });

  newChit.save(err => {
    if (err) return err;
    chit.find({}, (err, data) => {
      res.send(JSON.stringify(data));
    });
  });

  console.log(req.body);
});

app.post('/user', (req, res) => {
  const { firstName, lastName, emailId, phoneNumber, chits } = req.body;

  let newUser = new user({
    firstName,
    lastName,
    emailId,
    phoneNumber,
    chits,
  });

  newUser.save(err => {
    if (err) return err;
    user.find({}, (err, data) => {
      res.send('successfully submitted the user');
    });
  });

  console.log(req.body);
});

app.patch('/user/:id', (req, res) => {
  const id = req.params.id;
  console.log('====================================');
  console.log(req.body);
  console.log('====================================');
  user.findByIdAndUpdate(id, { ...req.body }, (err, res) => {
    if (err) return err;
  });
});
app.delete('/user/:id', (req, res) => {
  const id = req.params.id;
  user.findByIdAndRemove(id, { ...req.body }, (err, res) => {
    if (err) return err;
  });
});

app.listen(9000, () => {
  console.log('Server started on 9000');
});
