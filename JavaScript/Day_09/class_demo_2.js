class Student {
    constructor(rollNum, fname, lname) {
        this.rollNum = rollNum;
        this.fname = fname
        this.lname = lname;
    }

    fullname() {
        return this.fname + " " + this.lname;
    }
}
let s = new Student(111, "Swathi", "Singatala");
console.log(s);
console.log(s.fullname());