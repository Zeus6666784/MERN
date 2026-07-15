function display(s)
{
    for (let stu in s)
    {
        console.log(`Name : ${stu.name}`);
        console.log(`Roll No. : ${stu.rollNo}`);
        console.log(`Marks : ${stu.marks}`);
        console.log("******************************");
    }
}

let student = [
    { name: "Harshita", rollNo: 11, marks: 90 },
    { name: "Sachin", rollNo: 44, marks: 89 },
    { name: "Sonu", rollNo: 1, marks: 95 }
];

display(student);