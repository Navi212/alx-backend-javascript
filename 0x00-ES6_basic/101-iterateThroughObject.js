export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = reportWithIterator.toString().replaceAll(',', ' | ');
  return employeeNames;
}
