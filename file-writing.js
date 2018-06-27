const fs = require('fs');

fs.writeFile(
  './modules/data.html',
  'hello this is just a test file',
  'utf-8',
  err => {
    if (err) return err;
    console.log('the file hase been created');
  },
);

fs.appendFile(
  './modules/data.html',
  '\nthis sentence is appended',
  'utf-8',
  err => {
    if (err) return err;
    console.log('the file hase been created');
  },
);
