export default function getStudentIdsSum(getListStudents) {
  return getListStudents.reduce((accumulator, eachItem) => accumulator + eachItem.id, 0);
}
