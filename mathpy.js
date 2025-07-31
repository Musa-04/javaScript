const descripter=  Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI);
console.log(descripter);


const chai={
    name:'ginger chai',
    price:250,
    isAvailable:true,
    OrderChai:function(){
        console.log(`Order placed for ${this.name}` );
        
    }

}
console.table(chai);
console.log(Object.getOwnPropertyDescriptor(chai, 'name'));


Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false,
})
console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

for (const [key,value] of Object.entries(chai)) {
    if (typeof value === 'function') {
        continue;
    }
    console.log(`${key} : ${value}`);
    
    
}