let student = {
    name: "Zeus",
    rollno: 14,
    age: 19,
    marks: 95
};
console.log("Orignal Object:");
console.log(student);

//Accessing Properties
console.log("Accessing Properties")
console.log("Name:",student.name);
console.log("Marks:",student.marks);

//Updating  A Property
student.marks = 99;
console.log("After updating")
console.log(student);

//Adding A New Property
student.city = "Mumbai";
console.log("After Adding A New Property ")
console.log(student);

//Delete A Property
delete student.rollno;
console.log("After Deleting A Property ")
console.log(student);
console.log("Lavkush T048");