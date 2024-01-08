export default function getStudentsByLocation(students, city) {
  const studentsArr = students.filter((person) => person.location === city);
  return studentsArr;
}
