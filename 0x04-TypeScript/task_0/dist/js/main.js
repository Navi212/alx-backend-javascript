// Creating an interface for a student
// Creates 2 students objects
var student1 = {
    firstName: "Joe",
    lastName: "Navi",
    age: 90,
    location: "Nigeria",
};
var student2 = {
    firstName: "Jay",
    lastName: "Navi",
    age: 90,
    location: "Nigeria",
};
// Creates a list of shape Student
var studentsList = [student1, student2];
// Gets the id of the table to populate data into
var table = document.getElementById("studentTable");
// Checks if the table actually exists
if (table) {
    studentsList.forEach(function (student) {
        // Creates a row in the table
        var row = table.insertRow();
        // Create 2 cells for firstname and location inside the row
        var firstNameCell = row.insertCell(0);
        var locationCell = row.insertCell(1);
        // Adds data valaue into the cells
        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;
    });
}
//# sourceMappingURL=main.js.map