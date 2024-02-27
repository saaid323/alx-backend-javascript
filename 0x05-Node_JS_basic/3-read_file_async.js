const fs = require('fs');

async function countStudents(database) {
  const thenable = {
    then(resolve, reject) {
      if (!fs.existsSync(database)) {
        reject(new Error('Cannot load the database'));
      }
      const data = fs.readFileSync('./database.csv', { encoding: 'utf8', flag: 'r' });
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

      resolve(
        console.log(`Number of students: ${arr.length}`),
        console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`),
        console.log(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`),
      );
    },
  };
  await thenable;
}
module.exports = countStudents;
