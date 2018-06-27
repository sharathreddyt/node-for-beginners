const fs = require('fs');

fs.exists('view', exists => {
  if (exists) {
    console.log('folder already exists');
    return;
  } else {
    fs.mkdir('view', err => {
      if (err) return err;
    });
  }
});
