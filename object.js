// var instructor ={
//     name : "Ajith",
//     age : 21,
//     college : "SSIT",
//     role : "Student"
// }
// console.log(instructor);

var instructor ={
    name : "Ajith",
    age : 21,
    college : "SSIT",
    designation : "Mechanical Engineer"
}
for(var key in instructor){
    console.log("Instructor ",key , ":", instructor[key])
}