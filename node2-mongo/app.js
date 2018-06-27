const { MongoClient, ObjectId } = require('mongodb');
/*

in mongodb  each collection is a table and each document is a row in collection/table

*/
MongoClient.connect('mongodb://localhost:27017/animals', function(err, client) {
  if (err) throw err;
  console.log('CONNECTED');
  const db = client.db('animals');

  //   const object = new ObjectId();
  //   console.log('====================================');
  //   console.log(object);
  //   console.log('====================================');

  // in the below command mammals table is created and a document/object is inserted with document/object keys as columns
  //   db.collection('mammals').insertOne(
  //     {
  //       name: 'dog',
  //       legs: 4,
  //       isCute: true,
  //     },
  //     (error, result) => {
  //       if (error) return console.log(error);
  //       console.log('inserted');
  //     },
  //   );
  //FETCHING DATA
  // fetching the data/documents from collection
  //   db
  //     .collection('mammals')
  //     .find()
  //     .toArray(function(err, result) {
  //       if (err) throw err;

  //       console.log(result);
  //     });

  //UPDATING A DOCUMENT IN A COLLECTION

  //   db.collection('mammals').findOneAndUpdate(
  //     {
  //       _id: new ObjectId('5ab9620d6456206037cf2c68'),
  //     },
  //     {
  //       $set: {
  //         name: 'dodgy',
  //         legs: 3.5,
  //         isCute: 'mildly',
  //       },
  //     },
  //     (err, res) => {
  //       if (err) {
  //         console.log('====================================');
  //         console.log(err);
  //         console.log('====================================');
  //         return err;
  //       }
  //       console.log('====================================');
  //       console.log(res);
  //       console.log('====================================');
  //     },
  //   );

  //DELETING

  db.collection('mammals').findOneAndDelete(
    {
      _id: new ObjectId('5ab9618332b69a6004a5e601'),
    },
    (err, res) => {
      if (err) {
        console.log('====================================');
        console.log(err, 'err');
        console.log('====================================');
        return err;
      }
      console.log('====================================');
      console.log(res, 'res');
      console.log('====================================');
    },
  );
});

// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/animals', error => {
//   if (error) return error;
// });

// mongoose.connection
//   .once('open', () => {
//     console.log('connected');
//   })
//   .on('error', err => {
//     console.log('could not connect', err);
//     return err;
//   });
