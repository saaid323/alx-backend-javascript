export default function createIteratorObject(report) {
  const i = [];
  for (const departments in report.allEmployees) {
    /* guard-for-in */
    if (Object.prototype.hasOwnProperty.call(report.allEmployees, departments)) {
      i.push(...report.allEmployees[departments]);
    }
  }
  return i;
}
