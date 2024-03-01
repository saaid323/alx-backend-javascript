const fs = require('fs');

function readDatabase(database) {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(database)) {
      reject(new Error('Cannot load the database'));
    }
    const data = fs.readFileSync(database, { encoding: 'utf8', flag: 'r' });
    const headers = data.trim().split('\n')[0].trim().split(',');
    const list = data.trim().split('\n');

    const studentArr = { CS: [], SWE: [] };
    for (let i = 1; i < list.length; i += 1) {
      const cont = data.trim().split('\n')[i].trim().split(',');
      const newArr = {};
      for (let j = 0; j < headers.length; j += 1) {
        newArr[headers[j]] = cont[j];
      }
      if (Object.prototype.hasOwnProperty.call(newArr, 'field')) {
        studentArr[newArr.field].push(newArr.firstname);
      }
    }

    resolve(studentArr);
  });
}
module.exports = readDatabase;
