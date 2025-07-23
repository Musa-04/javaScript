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
// //🎯 Core Topic
// Introduces higher-order array loops in JavaScript—methods that take functions as parameters for processing arrays.

// 🔍 Key Methods Covered
// .forEach()

// Iterates over elements.

// Executes a callback for each item without returning a new array.

// .map()

// Applies a function and returns a new array of transformed values.

// Great for data conversion and creating derived lists.

// .filter()

// Returns a subset of elements that match a given condition.

// Useful for selecting items based on criteria.

// .reduce()

// Accumulates array values into a single result.

// Common uses: summation, finding max/min, merging data structures.

// 🔗 Chaining In Arrays
// Demonstrates combining methods:

// e.g. array.map(...).filter(...).reduce(...)

// Highlights how chaining leads to clean, functional-style data processing pipelines.

// ✅ Why It Matters
// Promotes modular, readable, and declarative code.

// Avoids repetitive for loops by encapsulating logic in callbacks and method chains.

