//JSON.stringify() - for objects

let student = {
    name : "Murugesh V",
    age : 21,
    course : "MERN FullStack",
    institute : "AIITE"
};
let jsonData = JSON.stringify(student);
console.log(jsonData);
console.log(typeof(jsonData));
console.log(typeof(student));

//JSON.stringify() - for arrays

let fruits = ["apple","mango","orange","pineapple"];
let jsonArray = JSON.stringify(fruits);
console.log(jsonArray);
console.log(typeof(jsonArray));
console.log(typeof(fruits));