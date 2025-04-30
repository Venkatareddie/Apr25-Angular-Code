class Student {
    constructor(rollno, name) {
        this.rollno = rollno;
        this.name = name;
        // this.address = "Tennessee";
        // this.sname = "Eureka";
    }
}

Student.prototype.clgName = 'Eureka';
Student.prototype.clgAdd = 'knoxville';

let std1 = new Student(101, "Venkatesh");
let std2 = new Student(102, "Prem");

console.log(std1);
console.log(std2);
console.log(std1.rollno, std1.name, std1.clgName, std1.clgAdd);
console.log(std2.rollno, std2.name, std2.clgName, std2.clgAdd);

std1.clgAdd = "Tennessee";

console.log(std1.rollno, std1.name, std1.clgName, std1.clgAdd);
console.log(std2.rollno, std2.name, std2.clgName, std2.clgAdd);

console.log(std1.__proto__.clgName);