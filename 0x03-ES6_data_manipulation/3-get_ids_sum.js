export default function getStudentIdsSum(ids) {
  const sum = ids.reduce((total, item) => total + item.id, 0);
  return sum;
}
