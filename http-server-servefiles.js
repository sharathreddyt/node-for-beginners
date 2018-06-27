const http = require('http');
const fs = require('fs');

const server = http
  .createServer((req, res) => {
    console.log(req);
    if (req.url === '/about') {
      fs.readFile('./global.html', 'utf-8', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.end(data);
      });
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' });

      res.end('404 error');
    }
  })
  .listen(9080);
console.log('listening on port 9080');
