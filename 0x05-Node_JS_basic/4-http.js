const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'plain/Text');
  res.write('Hello Holberton School!');
  res.end();
});

server.listen(1245);
