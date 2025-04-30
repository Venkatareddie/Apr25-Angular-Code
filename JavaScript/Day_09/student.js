function student1(rollNum, name, address, age) {
    this.rollNum = rollNum;
    this.name = name;
    this.address = address;
    this.age = age;
    //this.email = 'vsingatala@gmail.com'
}
let std1 = new student1(101, 'Venkat', 'Texas', 27);
let std2 = new student1(102, 'Ravi', 'tampa', 36);


console.log(std1);
console.log(std2);

class student2 {
    constructor(rollNum, name, address, age) {
        this.rollNum = rollNum;
        this.name = name;
        this.address = address;
        this.age = age;

    }
}

let std3 = new student2(103, 'Ravi', 'Chicago', 30);
let std4 = new student2(104, "Prem", "Newyark", 28);
console.log(std3)
console.log(std4)