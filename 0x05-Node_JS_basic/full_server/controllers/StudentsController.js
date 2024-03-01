import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const names = process.argv[2];
    readDatabase(names)
      .then((data) => {
        let res = 'This is the list of our students\n';
        for (const i in data) {
          if (Object.hasOwnProperty.call(data, i)) {
            res += `Number of students in ${i}: ${data[i].length}. List: ${data[i].join(', ')}\n`;
          }
        }
        response.status(200).send(res);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (!['CS', 'SWE'].includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
    }
    readDatabase(process.argv[2]).then((data) => {
      response.status(200).send(`List: ${data[major].join(', ')}`);
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }
}

export default StudentsController;
