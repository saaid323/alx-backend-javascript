const app = require('http');

const server = app.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hello Holberton School!');
  res.end();
});

server.listen(1245, 'localhost', () => {});
module.exports = app;
