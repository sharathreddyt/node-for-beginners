const https = require('https');
const fs = require('fs');

const url = 'https://doapp.qa.bluecrossmn.com/activities';

https.get(url, res => {
  res.setEncoding('utf-8');

  let body = '';

  res.on('data', data => {
    body += data;
  });

  res.on('end', () => {
    fs.writeFile('data.json', body, 'utf-8', err => {
      if (err) return err;

      console.log('just pulled all the data');
    });
  });
});
