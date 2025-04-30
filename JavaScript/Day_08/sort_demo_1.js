let arr = [10, 50, 40, 20, 30];
arr.sort();
console.log(arr); // [10, 20, 30, 40, 50]

let arr1 = [10, 107, 91, 9, 7, 8, 81, 95, 85, 102, 109];
arr1.sort();
console.log(arr1);

arr1.sort((a, b) => a - b);
console.log(arr1); //Ascending order

arr1.sort((a, b) => b - a);
console.log(arr1); //Descending order