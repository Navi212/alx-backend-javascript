export default function createIteratorObject(report) {
    const employeesList = Object.values(report.allEmployees);
    const newList = [];
    for (const employee of employeesList) {
      newList.push(...employee);
    }
    return newList;
  }
  