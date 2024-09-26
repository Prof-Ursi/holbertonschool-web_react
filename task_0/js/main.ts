// Create interface named Student
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create 2 student variables
const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 22,
    location: 'New York'
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 42,
    location: 'Chicago'
};

// Store the 2 students variables in an array
const studentsList: Array<Student> = [student1, student2];

// Using JS, render a table, and for each element in the array, append a new row to the table.
// Each row should have 2 cells, one for the first name and one for the location.
document.addEventListener("DOMContentLoaded", function () {
    const table = document.createElement("table");

    // Create header row
    const headerRow = table.insertRow();
    const headerNames = ["First Name", "Location"];
    headerNames.forEach((name) => {
      const th = document.createElement("th");
      th.textContent = name;
      headerRow.appendChild(th);
    });

    // Append a row for each student in studentsList
    studentsList.forEach((student) => {
      const row = table.insertRow();
      const cellFirstName = row.insertCell();
      const cellLocation = row.insertCell();
      cellFirstName.textContent = student.firstName;
      cellLocation.textContent = student.location;
    });
  
    // Append the table to the body
    document.body.appendChild(table);
  });
