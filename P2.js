function calculateSalary(salary, name) {
    let bonus = 5000;
    let totalSalary = salary + bonus;
    console.log("Employee Name: " + name);
    console.log("Base Salary: " + salary);
    console.log("Bonus: " + bonus);
    console.log("Total Salary: " + totalSalary);
}
calculateSalary(30000, "John Doe");