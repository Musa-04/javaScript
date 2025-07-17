// console.log("hello this is object file."); //singleton
// object literals

const mysym=Symbol("key1")
const JSUser={
    name:"mustafeez",
    "full name":"Mustafeez shaikh",
    [mysym]:"mykey$",
    age:20,
    location:"chikodi",
    email:"musa@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]

}
// console.log(JSUser.age);
// console.log(JSUser["email"]);
// console.log(JSUser["full name"]);
// console.log(JSUser[mysym]);


// JSUser.email="musa@gmail.com"
// Object.freeze(JSUser) //to make object immutable
// JSUser.email="mustafeez@gmail.com"
// console.log(JSUser);

JSUser.greeting=function(){
    console.log("hello this is greeting function");


}
console.log(JSUser.greeting());
