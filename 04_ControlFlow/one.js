// if 
const isUserLoggedIn=true
const temp=50

// if(temp===50){
//     console.log("less then fifty");
// }
// else{
// console.log("temp is high and > 50");
// }

// // < ,>,<=,>=,==,!=,=== ,!==
// if(2!==3){
//     console.log("yes");
    
// }

// const score=200
// if(score>100){
//     let power="fly"
//     console.log(`user power: ${power}`);
    
// }
//     console.log(`user power: ${power}`);


// const balance=1000
// // if(balance>500) {
// //     console.log("test")
// // console.log("test two");
// // }


// //nesting 
// if(balance<500){
//     console.log("less than 500");
// } else if(balance<750){
//     console.log("less than 750");

// } else if(balance<900){
//     console.log("less than 900");


// }
// else{
//     console.log("less than 1200");
    
// }

const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=true
const loggedInFromEmail=false

if(userLoggedIn && debitCard){
    console.log("Allow to buy courses");
}
if(loggedInFromGoogle||loggedInFromEmail){
    console.log("user logged in ");
    
}

