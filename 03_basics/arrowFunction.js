// const { use } = require("react");

const { use } = require("react");

const user={
    username: "JohnDoe",
    price: 100,
    welcomeMessage:function(){
        console.log(`${this.username} welcome to website`);
        console.log(this);
        

    }
}

// user.welcomeMessage(); // JohnDoe welcome to website
// user.username = "JaneDe";
// user.welcomeMessage(); // JaneDe welcome to website
// console.log(this); // this is global object
// Arrow functions do not have their own 'this' context
// function chai(){
//     let username = "JaneDome";
//     console.log(this.username); // this is global object
    
// }
// chai();

// const chai=function(){
//     let username = "JaneDome";
//     console.log(this.username); // this is global object
    
// }
// chai(); // JaneDome

const chai=()=>{
    let username = "JaneDome";
    console.log(this); // this is global object
    
}
// chai();

// const addTwo=(n1,n2)=>{
//     return n1+n2;
// }
// const addTwo=(n1,n2)=>  n1+n2
// const addTwo=(n1,n2)=> ( n1+n2);

const addTwo=(n1,n2)=> ({username: "JohnDoe"});
console.log(addTwo(10,20)); // -> 30
console.log(username);
