const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    let body = '';

    if (req.method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      fs.readFile('./http-form.html', 'UTF-8', (error, data) => {
        if (error) return error;

        res.write(data);
        res.end();
      });
    } else if (req.method === 'POST') {
      req.on('data', data => {
        body += data;
      });

      req.on('end', () => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });

        res.write(body, () => {
          res.end();
        });
      });
    } else {
      req.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 ERROR');
    }
  })
  .listen(9090);

console.log('server started on port 9090');
