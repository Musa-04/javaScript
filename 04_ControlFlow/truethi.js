const userEmail=[]
if (userEmail) {
    console.log("Got User Email");
    
} else{
    console.log("don`t have Email");
    
}
// falsy values
//false, 0,-0,BigInt 0n,"",null,undefined,NaN

//truethy values 
// "0",[],'false'," ",{},function(){}


// if (userEmail.length===0) {
//     console.log("Array is empty");
    
    
// }

const emptyObj={}
if (Object.keys(emptyObj).length===0) {
      console.log("Object is empty");
      
    
}

// Nullish Coalescing Operator (??): null undefined
let val1;
val1=5??10
val1=null ?? 10
console.log(val1);
