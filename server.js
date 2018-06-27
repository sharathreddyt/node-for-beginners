const http = require('http');

// the below code is reading a file and writing on to web page

// const fs = require('fs');

// fs.readdir('.', (err, res) => {
//   if (err) throw err;

//   console.log(res);
// });
// let data;
// fs.readFile('./data.json', 'UTF-8', (err, res) => {
//   console.log(res);
//   data = res;
// });

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  //   res.end(data);
  res.end("this is sharath's server");
});

server.listen(9090);
