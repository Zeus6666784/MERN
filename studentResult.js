let studentName = "Omkar";
let rollNumber = 701;
let subject1 = 65;
let subject2 = 78;
let subject3 = 52;


// Store marks in an array
let marks = [subject1, subject2, subject3];

// Step 4: Functions
function calculateTotal(markArray) {
    let total = 0;

    for (let mark of markArray) {
        total += mark;
    }

    return total;
}

function calculatePercentage(total, numberOfSubjects) {
    return total / numberOfSubjects;
}

// Call functions
let totalMarks = calculateTotal(marks);
let percentage = calculatePercentage(totalMarks, marks.length);

// Step 6: Grade using if-else
let grade;

if (percentage >= 90) {
    grade = "A+";
} else if (percentage >= 75) {
    grade = "A";
} else if (percentage >= 60) {
    grade = "B";
} else if (percentage >= 50) {
    grade = "C";
} else if (percentage >= 35) {
    grade = "D";
} else {
    grade = "Fail";
}

// Step 7: Display subject marks using loop
console.log("Subject Marks:");
for (let i = 0; i < marks.length; i++) {
    console.log(`Subject ${i + 1}: ${marks[i]}`);
}

// Step 8: Template Literals
console.log(`
-------------------------------
Student Result System
-------------------------------
Student Name : ${studentName}
Roll Number  : ${rollNumber}

Total Marks  : ${totalMarks}
Percentage : ${percentage}%
Grade        : ${grade}
`);
console.log("Omkar")