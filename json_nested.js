//Nested JSON

let candidate = `{"person" : {
    "name" : "MURUGESH V",
    "age" : 22
},
"course" : "MERN FullStack",
"active" : true
}`
const data = JSON.parse(candidate);
console.log(data.person.age);
console.log(data.course);

//
let jsonStr = `{"name":"Murugesh V","age":2004}`;
let user = JSON.parse(jsonStr,(key,value) =>{
    if(key === "age"){
        return 2025 - value;
    };
        return value;
});
console.log(user);