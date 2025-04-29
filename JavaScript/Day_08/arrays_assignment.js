let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
];

//1. declare array of employees & sort them in ascending order(empId)

employees.sort((a, b) => a.eId - b.eId);
console.log("Sorted Employees by eId in Ascending Order: ", employees);

//2.declare array of employees & sort them in ascending order by name.
employees.sort((a, b) => a.name - b.name);
console.log("Sorted Employees by Name in Ascending Order: ", employees);

//3. declare array of employees & filter the employees whose sal>6000;

employees.filter(emp => emp.sal > 6000).forEach(emp => console.log(emp));

//4.declare array of employees & increase sal of every employee by 500;

employees.forEach(emp => emp.sal += 500);
console.log("Updated Employees with increased salary: ", employees);

//5. declare array of employees & add "comp:ibm" to every employee;

employees.forEach((emp) => {
    emp.add.company = 'ibm';
});
console.log("Updated Employees with company: ", employees);

