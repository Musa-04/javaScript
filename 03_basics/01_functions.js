// console.log("H");
// console.log("e");
function sayMyName(){
    console.log("M");
    console.log("U");
    console.log("S"); //
    console.log("A");
    
}
// sayMyName()
// function addTwoNumbers(num1,num2){
//    console.log(num1+num2);

// }

function addTwoNumbers(num1,num2){
    let result=num1+num2
    return result
    

}
const result= addTwoNumbers(5,8)
// console.log("Result:",result);


function loginUserMessage(username="samay"){
    if(!username){
        console.log("Please provide a username");
        return
        
    }
    return `${username}  is just logged in `


}
// console.log(loginUserMessage("mustafeez"));
console.log(loginUserMessage());
