const mongoose = require('mongoose');
const User = require('./models/User');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

// to use promises for mongoose methods
// mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/mongoose', (error, res) => {
  if (error) return error;
  console.log('CONNECTED TO SERVER');
});

mongoose.connection
  .once('open', () => {
    console.log('connected');
  })
  .on('error', err => {
    console.log('could not connect', err);
  });

app.get('/', (req, res) => {
  res.send('ROOT');
});
app.post('/users', (req, res) => {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    isActive: req.body.isActive,
  });
  newUser.save((err, dataSaved) => {
    if (err) return err;
    //   if (err) {
    //     res.status(404).send('user not saved because of database error', err);
    //   }
    res.send(dataSaved);
    console.log(dataSaved);
  });
});

app.get('/users', (req, res) => {
  User.find({}, (err, users) => {
    res.status(200).send(users);
  });
});

//PATCH or PUT
//Patch can be used to modify a part of row/document
//if we use put we need to modify or specify all the fields in row/document

app.patch('/users/:id', (req, res) => {
  const id = req.params.id;
  const firstName = req.body.firstName;

  User.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        firstName,
      },
    },
    { new: true },
    (error, result) => {
      res.send(result);
    },
  );
});

// app.put('/users/:id', (req, res) => {
//   const id = req.params.id;
//   const firstName = req.body.firstName;
//   const lastName = req.body.lastName;
//   const isActive = req.body.isActive;

//   User.findByIdAndUpdate(
//     { _id: id },
//     {
//       $set: {
//         firstName,
//         lastName,
//         isActive,
//       },
//     },
//     { new: true },
//     (error, result) => {

//       res.send(result);
//     },
//   );
// });

app.put('/users/:id', (req, res) => {
  User.findOne({ _id: req.params.id }, (err, user) => {
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;

    user.save((err, savedUser) => {
      res.send(savedUser);
    });
  });
});

const port = 9090 || process.env.PORT;

app.listen(port, () => {
  console.log('App listening on port 9090!');
});
