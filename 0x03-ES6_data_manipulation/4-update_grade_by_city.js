export default function updateStudentGradeByCity(students, city, grades) {
  const nan = { grade: 'N/A' };
  const studentArr = students.filter((location) => location.location === city).map((student) => {
    const location = { ...student };
    const grad = grades.find((grade) => location.id === grade.studentId);
    if (grad !== undefined) {
      location.grade = grad.grade;
    } else {
      location.grade = nan.grade;
    }
    return location;
  });
  return studentArr;
}
