const name="musa"
const repoCount=50
console.log(name+ repoCount+" value");
console.log(`hello my name is ${name} and my repo count us ${repoCount}`); //string interpolation 

const gameName=new String('musa-ms');
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase()); 
console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));
const newString=gameName.substring(0,3)
console.log(newString);


const anotherString=gameName.slice(-6,3)
const newStringOne="      Mustafeez"
console.log(newStringOne.trim());
// console.log(newStringOne);


const url="https://musa.com/musa%10mustafeez"
console.log(url.replace('%10','-'));

console.log(url.includes('musa'));
console.log(url.includes('mua'));

console.log(gameName.split('-'));
