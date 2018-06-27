const https = require('https');
const http = require('http');
const fs = require('fs');

const url = 'https://jsonplaceholder.typicode.com/posts';

http
  .createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/posts') {
      https.get(url, rest => {
        rest.on('data', data => {
          rest.setEncoding('utf-8');
          res.write(data);
        });

        rest.on('end', data => {
          res.end();
        });
      });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 ERROR,sorry could not find what you need');
    }
  })
  .listen(9090);
