const http = require('http');
const fs = require('fs');

function countStudents(database) {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(database)) {
      reject(new Error('Cannot load the database'));
    }
    const data = fs.readFileSync(database, { encoding: 'utf8', flag: 'r' });
    const headers = data.trim().split('\n')[0].trim().split(',');
    const list = data.trim().split('\n');

    const arr = [];
    const cs = [];
    const swe = [];

    for (let i = 1; i < list.length; i += 1) {
      const cont = data.trim().split('\n')[i].trim().split(',');
      const newArr = {};
      for (let j = 0; j < headers.length; j += 1) {
        newArr[headers[j]] = cont[j];
      }
      if (newArr.field === 'CS') {
        cs.push(newArr.firstname);
      }
      if (newArr.field === 'SWE') {
        swe.push(newArr.firstname);
      }
      arr.push(newArr);
    }

    resolve(`Number of students: ${arr.length}\nNumber of students in CS: ${cs.length}. List: ${cs.join(', ')}\nNumber of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
  });
}

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((result) => {
        res.end(`This is the list of our students\n${result}`);
      })
      .catch((error) => {
        console.error(error);
        res.statusCode = 500;
        res.end('Internal Server Error');
      });
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
module.exports = app;
