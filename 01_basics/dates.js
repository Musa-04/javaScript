let myDate=new Date() //date is my object 
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate=new Date(2025,0,23)
// let myCreatedDate=new Date(2025,0,23,5,3)
// let myCreatedDate=new Date("2025-01-17")
let myCreatedDate=new Date("01-14-2025")

// console.log(myCreatedDate.toLocaleString());

let myTimesStamp=Date.now()
// console.log(myTimesStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getDay());
console.log(newDate.getTime());
console.log(newDate.getMonth()+1);
// `${newDate.getDay()} and the time is ${newDate.getTime()} ok done`
newDate.toLocaleString('default',{
     weekday:"long"

})

