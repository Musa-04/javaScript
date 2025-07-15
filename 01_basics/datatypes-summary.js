// primitive
// 7 Types:  string,Number,BigInt,Boolean,Symbol,null,undefined

const score=false;
const scoreValue=100.3;
const isLoggedIn=false;
const oursideTemp=null;
let userEmail;
 

const id=Symbol('123');
const anotherId=Symbol('123');
console.log(id === anotherId); // false, because symbols are unique

const bigNumber=BigInt(1234567890123456789012345678901234567890);



// Reference (Non-primitive)
// 4 Types: Object, Array, Function, Date

const heros=['Thor','Ironman','Hulk'];
let myObj={
    name:'Thor',
    age:1000,

}
console.log(typeof heros); // boolean
const myFunction=function(){
    console.log('Hello World');
}
console.log(typeof bigNumber); // boolean
console.log(typeof heros); // function