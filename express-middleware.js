const express = require('express');

const app = express();

app.use('/css', express.static(__dirname + '/public'));

app.use('/', (req, res, next) => {
  next();
});

app.get('/', (req, res) => {
  res.send(`<!doctype html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="/css/style.css">
      <title>Form</title>
  </head>
  
  <body>
  
      
      lorem ipsum dolor sit amet 
  
  
  </body>
  
  </html>`);
});

app.listen(9090, () => {
  console.log('App listening on port 9090!');
});
