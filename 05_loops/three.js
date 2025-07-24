// ✅ for...of loop with arrays
const arr = [1, 2, 3, 4, 5];
for (const element of arr) {
    console.log(element);
}

// ✅ for...of loop with strings
const greetings = "hello world!";
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// ✅ Maps
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('FR', "France");

console.log("Map Contents:", map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

// ❌ Invalid: for...of on object (fixed below)
const myObject = {
    'game1': 'NFS',
    'game2': 'Spider-Man'
};

// ✅ Correct way using Object.entries()
for (const [key, value] of Object.entries(myObject)) {
    console.log(key, ':-', value);
}


// 🎯 Core Topic: Higher-Order Array Methods in JavaScript
// These methods take callback functions and help process arrays in a cleaner way.

// 🔍 .forEach()
// Executes a function for each array element (no return value)
arr.forEach((item) => {
    console.log(`forEach item: ${item}`);
});

// 🔍 .map()
// Transforms each element and returns a new array
const doubled = arr.map((item) => item * 2);
console.log("Mapped (doubled):", doubled);

// 🔍 .filter()
// Filters elements based on condition, returns a new array
const even = arr.filter((item) => item % 2 === 0);
console.log("Filtered (even numbers):", even);

// 🔍 .reduce()
// Reduces array to a single value (e.g., sum)
const total = arr.reduce((acc, curr) => acc + curr, 0);
console.log("Reduced (sum):", total);


// 🔗 Chaining Example
const chained = arr
    .map((num) => num * 3)
    .filter((num) => num > 10)
    .reduce((acc, num) => acc + num, 0);

console.log("Chained result:", chained);


// ✅ Why It Matters
// - Promotes readable, modular code
// - Avoids repetitive loops
// - Makes data transformation cleaner using functional style


const coding=["js","ruby","java","python","c++"]
 const  values=coding.forEach((item)=>{
    console.log(item);
    

})
console.log(values);
