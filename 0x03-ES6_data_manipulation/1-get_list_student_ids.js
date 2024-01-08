export default function getListStudentIds(ids) {
  if (!Array.isArray(ids)) {
    return [];
  }
  const studentsId = ids.map((i) => i.id);
  return studentsId;
}
