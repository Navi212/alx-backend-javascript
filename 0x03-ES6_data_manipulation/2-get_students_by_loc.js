export default function getStudentsByLocation(getListStudents, city) {
  return getListStudents.filter((objs) => city === objs.location);
}
