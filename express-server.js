const express = require('express');
const app = express();

const port = process.env.PORT || 9090;

app.get('/', (req, res) => {
  res.send('<h1>Hello</h1>');
  console.log();
});

app.get('/api', (req, res) => {
  //   res.send('<h1>API</h1>');
  res.json({ name: 'edwin' });
});

app.listen(port);
console.log('its working');
