let names = ["John", "Jane", "Jim", "Jack"];

// Using For Loop
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

console.log("__________________________");
//Using For In Loop
for (let students in names) {
    console.log(names[students]);
}

console.log("__________________________");
//Using For Of Loop
for (let s of names) {
    console.log(s);
}

console.log("__________________________");

names.forEach((val, index, array) => {
    console.log(val, index, array);
})