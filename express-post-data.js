const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', (req, res, next) => {
  next();
});

app.post('/post', (req, res) => {
  console.log('====================================');
  console.log(req.body);
  console.log('====================================');
});

app.listen(9090, () => {
  console.log('App listening on port 9090!');
});
