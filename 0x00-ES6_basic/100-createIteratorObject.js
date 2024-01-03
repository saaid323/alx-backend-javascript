export default function createIteratorObject(report) {
  const i = [];
  for (const departments in report.allEmployees) {
    i.push(...report.allEmployees[departments]);
  }
  return i;
}
