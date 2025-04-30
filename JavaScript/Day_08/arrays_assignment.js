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

employees.forEach(emp => emp.comp = 'ibm');
console.log("Added company info:", employees);

/* 6. convert array of letters to array of words
const inputArr = [
    'b', 'a', 'k', 'e', '',
    'c', 'a', 'k', 'e', '',
    'e', 'a', 't'
];
output = ['bake', 'cake', 'eat'];

*/
const inputArr = [
    'b', 'a', 'k', 'e', '',
    'c', 'a', 'k', 'e', '',
    'e', 'a', 't'
];

const words = inputArr
    .join(' ')
    .split('  ')
    .map(word => word.replace(/ /g, ''));

console.log("Converted array of letters to array of words:", words);

/* 7. add Dept info for each employee
    employees = [{ eId: 101, name: "sanjay", sal: 5000, gender: "male" },
    { eId: 104, name: "reena", sal: 8000, gender: "female" }]
    departments = [{ eId: 101, dept: "sales" },
    { eId: 104, dept: "marketing" }]
    
    */
let employee = [{ eId: 101, name: "sanjay", sal: 5000, gender: "male" },
{ eId: 104, name: "reena", sal: 8000, gender: "female" }]

let departments = [{ eId: 101, dept: "sales" },
{ eId: 104, dept: "marketing" }]

employee.map(emp => {
    let dept = departments.find(dept => dept.eId === emp.eId);
    if (dept) {
        emp.dept = dept.dept;
    }
});

console.log("Employees with Department Info: ", employee);

/*
8. declare array of employees & groupBy employees-name
    sample output: {
        'sanjay' : [{},{}],
        'alok' : [{}]
    }
*/

// Group by name using reduce
let groupedEmployees = employees.reduce((acc, emp) => {
    acc[emp.name] = acc[emp.name] || [];
    acc[emp.name].push(emp);
    return acc;
}, {});

console.log("Grouped Employees by Name: ", groupedEmployees);

// 9. intersection of 2 number arrays

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

const intersection = arr1.filter(num => arr2.includes(num));

console.log("Intersection:", intersection);

//10. WAP to print the occurance of each elements 
input = [10, 20, 30, 40, 50, 10, 30, 50]
//output = { 10: 2, 20: 1, 30: 2, 40: 1, 50: 2 }

const newInput = new Map();

input.forEach((element) => {
    if (newInput.has(element)) {
        newInput.set(element, newInput.get(element) + 1);
    } else {
        newInput.set(element, 1);
    }
});

console.log("Occurrence of each element:", Object.fromEntries(newInput));