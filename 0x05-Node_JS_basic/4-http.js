const app = require('http');

const server = app.createServer((req, res) => {
  res.setHeader('Content-Type', 'plain/Text');
  res.write('Hello Holberton School!');
  res.end();
});

server.listen(1245);
module.exports = app;
