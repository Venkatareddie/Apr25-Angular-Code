let employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
];
//finding first female employee using find method
let first_female_employee = employees.find((emp => emp.gender === 'female'));
console.log(first_female_employee)

//finding first female employee index using findIndex method
let first_female_employee_index = employees.findIndex((emp) => emp.gender === 'female');
console.log(first_female_employee_index);

// print the last female employee in the list
let last_female_emp = employees.findLast((emp) => emp.gender === 'female');
console.log('Last Female Employee:: ', last_female_emp);

//finding last female employee index using findIndex method
let last_female_employee_index = employees.findLastIndex((emp) => emp.gender === 'female');
console.log(last_female_employee_index);

//finding all female employees using filter method
let all_female_employees = employees.filter((emp) => emp.gender === 'female');
console.log(all_female_employees);