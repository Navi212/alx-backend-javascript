// Creating an interface for a student

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Creates 2 students objects
const student1: Student = {
    firstName: "Joe",
    lastName: "Navi",
    age: 90,
    location: "Nigeria",
};

const student2: Student = {
    firstName: "Jay",
    lastName: "Navi",
    age: 90,
    location: "Nigeria",
};

// Creates a list of shape Student
const studentsList: Student[] = [student1, student2];

// Gets the id of the table to populate data into
const table = document.getElementById("studentTable") as HTMLTableElement;

// Checks if the table actually exists
if (table) {
    studentsList.forEach((student) => {
        // Creates a row in the table
        const row = table.insertRow();

        // Create 2 cells for firstname and location inside the row
        const firstNameCell = row.insertCell(0);
        const locationCell = row.insertCell(1);

        // Adds data valaue into the cells
        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;
    })
}
