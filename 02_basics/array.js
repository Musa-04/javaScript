// console.log("this is array");

//Array
const myArr=[0,1,2,3,5,6,10]
// const myHeros=["shakti","spy"]

// const myArr2=new Array(1,2,3,6,5,10)
// console.log(myArr[10]);
// console.log(myArr2[5]); 


//Array methods

myArr.push(7)
myArr.push(9)
myArr.pop()

// myArr.unshift(6) //insert at start and move the index .
// myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(6));
// const newArr=myArr.join()
// console.log( typeof newArr);

// console.log(myArr);

//slice, splice
console.log("A",myArr);
const myn1=myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3)
console.log(myn1);
console.log(myn2);


