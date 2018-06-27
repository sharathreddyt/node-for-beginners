const fs = require('fs');

fs.readdir('.', (err, res) => {
  if (err) throw err;

  console.log(res);
});

fs.readFile('./global.html', 'UTF-8', (err, res) => {
  console.log(res);
});
