//for of

const arr=[1,2,3,4,5]
for (const element of arr) {
    // console.log(element);
}

const greetings="hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
    
}
//Maps 
const map= new Map()
map.set('IN ',"india")
map.set('USA',"United States of america")
map.set('Fr',"France")
console.log(map);

for (const [key,value] of map) {
    
    // console.log(key,':-',value);
    
}

const myObject={
    'game1':'NFS',
    'game2':'spi'
}
for (const [key,value] of myObject) {
    
}