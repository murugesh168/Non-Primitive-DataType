//JSON.parse() - for objects

let jsonString = `{"name":"Murugesh V","age":21,"course":"MERN FullStack"}`;
console.log(jsonString);
console.log(typeof(jsonString));
const obj = JSON.parse(jsonString);
console.log(obj);
console.log(typeof(obj));
console.log(obj.name);

////JSON.parse() - for arrays

let isArray = ` ["apple","mango","orange","pineapple"]`;
let arr = JSON.parse(isArray);
console.log(arr);
console.log(typeof(isArray));
console.log(typeof(arr));