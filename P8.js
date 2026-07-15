let students = [
    {
        name: "Zeus",
        rollno: 14,
        age: 19,
        marks: 95
    },
    {
        name: "Bhavesh",
        rollno: 39,
        age: 19,
        marks: 91
    },
    {
        name: "Lavkush",
        rollno: 48,
        age: 19,
        marks: 94
    }
];
function display(s) {
    console.log("Student Details:")
    for (let stud of s) {
        console.log(`Name : ${stud.name}`);
        console.log(`Age : ${stud.age}`);
        console.log(`Roll no : ${stud.rollno}`);
        console.log(`Marks : ${stud.marks}`);
    }
}
display(students)
console.log("Lavkush T048");
